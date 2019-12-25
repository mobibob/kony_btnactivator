define({ 
  
  stateStore: {
	parent: null,
    paddingPx: 0, // 'px'
  }, 

 //Type your controller code here 
  onNavigate:function(){
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;
    this.initPage();
  },

  preShow: function() {
    if (typeof(this.view.info) == "undefined") {
      let browserActive = { browserActive: { active: false} };
      this.view.info = browserActive;
    }
  },
  
  postShow: function() {  
  },
  
  initPage: function() {
    this.view.btnOpen.onTouchEnd = this.onClickBrowser;
    this.stateStore.parent = this.view.flxScrollingContent;
  },
  
  onClickBrowser: function() {
    if (this.view.info.browserActive.active) {
      this.view.info.browserActive.active = false;
      // Overlay - visibility
      this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(false);
      // Overlay -- position & size
      this.view.flxOverlaySomething.top = (80.0 + (0.0/2)/ this.stateStore.parent.frame.height).toFixed(1) + "%";  // " 90%";
      this.view.flxOverlaySomething.left = (80.0 + (0.0/2)/ this.stateStore.parent.frame.width).toFixed(1) + "%"; //"90%";
      this.view.flxOverlaySomething.height = this.view.flxOverlaySomething.btnOpen.frame.height + "px";
      this.view.flxOverlaySomething.width = this.view.flxOverlaySomething.btnOpen.frame.width + "px";
      // Button 
      this.view.flxOverlaySomething.btnOpen.left = 0 + "%";
      this.view.flxOverlaySomething.btnOpen.top = 0 + "%";
    } else {
      this.view.info.browserActive.active = true;
      // Overlay - visibility
      this.view.flxOverlaySomething.setVisibility(true);
      this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(true);
      this.view.flxOverlaySomething.flxFrameBrowser.browser.setVisibility(true);
      // Overlay -- position & size
      this.view.flxOverlaySomething.top = this.stateStore.parent.frame.height - this.stateStore.parent.frame.height * 80.0/100.0 - this.view.flxOverlaySomething.btnOpen.frame.height + "px";
      this.view.flxOverlaySomething.left = this.stateStore.parent.frame.width - ((this.stateStore.parent.frame.width - 110) * 60.0/100.0) + "px";
      this.view.flxOverlaySomething.height = this.stateStore.parent.frame.height * 80.0/100.0 + "px";
      this.view.flxOverlaySomething.width = "40%";
      // Button 
      this.view.flxOverlaySomething.btnOpen.left = 80 + "%"; // this.view.flxOverlaySomething.frame.width - this.view.flxOverlaySomething.btnOpen.frame.width + "px";
      this.view.flxOverlaySomething.btnOpen.top = 80 + "%"; //(570 / this.view.flxOverlaySomething.frame.height/2)*100.00 + "%";
    }
    this.view.forceLayout();
  },

  
 });