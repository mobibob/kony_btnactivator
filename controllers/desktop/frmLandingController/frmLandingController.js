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
    kony.print("*** CLICK ***");
    //     if (this.view.flxOverlaySomething.flxFrameBrowser.isVisible) {
    //       this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(false);
    //     } else {
    //       this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(true);
    //     }

    if (this.view.info.browserActive.active) {
      this.view.info.browserActive.active = false;
      this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(false);

      let optionButtonReposition = 4;
      // Button 
      switch (optionButtonReposition) {
        case 1:
// close ... mimics the original          this.view.flxOverlaySomething.btnOpen.left =  45.0/100.0 * 90.0/100.0 + "%";
//           this.view.flxOverlaySomething.btnOpen.top = 80.0/100.0 * 90.0/100.0 + "%";
          this.view.flxOverlaySomething.btnOpen.left = 40.0/100.0 * 90.0/100.0 + "%"; // this.stateStore.parent.frame.left * 40.0/100.0 * 90.0/100.0 + "px";
          this.view.flxOverlaySomething.btnOpen.top = 80.0/100.0 * 90.0/100.0 + "%";
          break;
        case 2:
          this.view.flxOverlaySomething.btnOpen.left = this.stateStore.parent.frame.width * 40.0/100.0 * 90.0/100.0 + "px";
          this.view.flxOverlaySomething.btnOpen.top = "0px"; //this.view.flxOverlaySomething.frame.height - (this.view.flxOverlaySomething.frame.height * 80.0/100.0 * 90.0/100.0) + "px";
          break;
        case 3:
//           this.view.flxOverlaySomething.btnOpen.left = 60.0/100.0 * 90.0/100.0 + "%";
//           this.view.flxOverlaySomething.btnOpen.top = "0px";
          this.view.flxOverlaySomething.btnOpen.left = this.view.flxOverlaySomething.width - this.view.flxOverlaySomething.btnOpen.width + "px";
          this.view.flxOverlaySomething.btnOpen.top = this.view.flxOverlaySomething.height - this.view.flxOverlaySomething.btnOpen.height + "px";
          break;
        case 4:
          this.view.flxOverlaySomething.btnOpen.left = 0 + "%";
          this.view.flxOverlaySomething.btnOpen.top = 0 + "%";
          break;
      }
      // Frame
      this.view.flxOverlaySomething.top = (80.0 + (0.0/2)/ this.stateStore.parent.frame.height).toFixed(1) + "%";  // " 90%";
      this.view.flxOverlaySomething.left = (80.0 + (0.0/2)/ this.stateStore.parent.frame.width).toFixed(1) + "%"; //"90%";
      this.view.flxOverlaySomething.height = this.view.flxOverlaySomething.btnOpen.frame.height + "px";
      this.view.flxOverlaySomething.width = this.view.flxOverlaySomething.btnOpen.frame.width + "px";
    } else {
      this.view.info.browserActive.active = true;
      // Frame
      this.view.flxOverlaySomething.setVisibility(true);
      this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(true);
      this.view.flxOverlaySomething.flxFrameBrowser.browser.setVisibility(true);
      this.view.flxOverlaySomething.top = this.stateStore.parent.frame.height - this.stateStore.parent.frame.height * 80.0/100.0 - this.view.flxOverlaySomething.btnOpen.frame.height + "px";
      this.view.flxOverlaySomething.left = this.stateStore.parent.frame.width - ((this.stateStore.parent.frame.width - 110) * 60.0/100.0) + "px";
      this.view.flxOverlaySomething.height = this.stateStore.parent.frame.height * 80.0/100.0 + "px";
      this.view.flxOverlaySomething.width = "40%";
      // Whaaaa ... i hope this isn't necssary, but you never know if there are order dependencies.
      this.view.forceLayout();
      // Button 
      this.view.flxOverlaySomething.btnOpen.left = 80 + "%"; // this.view.flxOverlaySomething.frame.width - this.view.flxOverlaySomething.btnOpen.frame.width + "px";
      this.view.flxOverlaySomething.btnOpen.frame.top = 90 + "%";
    }
    this.view.forceLayout();
  },

// WORKING COPY ... minimalist function with the expand/collapse but movement in placement.
//
//   onClickBrowser: function() {
//     kony.print("*** CLICK ***");
//     if (this.view.info.browserActive.active) {
// 		this.view.info.browserActive.active = false;
//         // Button 
// //         this.view.flxOverlaySomething.btnOpen.left = this.view.flxOverlaySomething.frame.width * 45.0/100.0 * 90.0/100.0 + "px";
// //         this.view.flxOverlaySomething.btnOpen.top = this.view.flxOverlaySomething.frame.height - (this.view.flxOverlaySomething.frame.height * 80.0/100.0 * 90.0/100.0) + "px";
//         // Frame
//       	this.view.flxOverlaySomething.top = "90%";
//       	this.view.flxOverlaySomething.left = "90%";
//         this.view.flxOverlaySomething.height = this.view.flxOverlaySomething.btnOpen.frame.height + "px";
//         this.view.flxOverlaySomething.width = this.view.flxOverlaySomething.btnOpen.frame.width + "px";
//       } else {
// 		this.view.info.browserActive.active = true;
//         // Button 
// //         this.view.flxOverlaySomething.btnOpen.left = "0px";
// //         this.view.flxOverlaySomething.btnOpen.top = "0px";
//         // Frame
//         this.view.flxOverlaySomething.setVisibility(true);
//         this.view.flxOverlaySomething.flxFrameBrowser.setVisibility(true);
//         this.view.flxOverlaySomething.flxFrameBrowser.browser.setVisibility(true);
//       	this.view.flxOverlaySomething.top = this.stateStore.parent.frame.height - this.stateStore.parent.frame.height * 80.0/100.0 - this.stateStore.paddingPx - this.view.flxOverlaySomething.btnOpen.frame.height + "px";
//       	this.view.flxOverlaySomething.left = this.stateStore.parent.frame.width * 45.0/100.0 + "px";
//         this.view.flxOverlaySomething.height = this.stateStore.parent.frame.height * 80.0/100.0 + "px";
//         this.view.flxOverlaySomething.width = this.stateStore.parent.frame.width * 40.0/100.0 + "px";
//       }
//     this.view.forceLayout();
//   },
  
 });