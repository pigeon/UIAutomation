function goToATMsListView()
{
    target = UIATarget.localTarget();
    application = target.frontMostApp();
    //application.mainWindow().logElementTree()
    navBar = application.mainWindow().navigationBar()
    navBar.elements()[0].tap()
    navBar.elements()[0].waitForInvalid()
    var elements = navBar.segmentedControls()
    var listButton = elements[0].buttons()[1];

    if (listButton.isValid()) {
        target.pushTimeout(5);
        UIALogger.logMessage("Button name - " + listButton.name())
        listButton.tap()
        listButton.waitForInvalid()        
        return true
    } else {
        UIALogger.logError("Could not find 'listButton' button!");
        return false;
    }  
}


function atmsListViewTesting()
{
   target = UIATarget.localTarget();
   application = target.frontMostApp();
   //application.mainWindow().logElementTree()
   var tableView = application.mainWindow().tableViews()[0]
   var cellsCount = tableView.cells().length
   UIALogger.logMessage("Cells number " + cellsCount)   
   var randomnumber=Math.floor(Math.random()*cellsCount)   
   UIALogger.logMessage("Random number " + randomnumber)     
   tableView.cells().toArray()[randomnumber].scrollToVisible()
   tableView.cells().toArray()[randomnumber].tap()   
}

var res = goToATMsListView()
UIALogger.logMessage("function  goToListView() returns " + res)
if( res )
{
    atmsListViewTesting()
    goToATMsListView()    
}