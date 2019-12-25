define({ 
  
  stateStore: {
	parent: null,
    paddingPx: 4, // 'px'
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
    this.view.btnOpenBrowser.onTouchEnd = this.onClickBrowser;
    this.stateStore.parent = this.view.flxScrollingContent;
  },
  
  onClickBrowser: function() {
    kony.print("*** CLICK ***");
    //     if (this.view.flxOverlayBrowser.flxFrameBrowser.isVisible) {
    //       this.view.flxOverlayBrowser.flxFrameBrowser.setVisibility(false);
    //     } else {
    //       this.view.flxOverlayBrowser.flxFrameBrowser.setVisibility(true);
    //     }

    if (this.view.info.browserActive.active) {
      this.view.info.browserActive.active = false;
      let optionButtonReposition = 3;
      // Button 
      switch (optionButtonReposition) {
        case 1:
// close ... mimics the original          this.view.flxOverlayBrowser.btnOpenBrowser.left =  45.0/100.0 * 90.0/100.0 + "%";
//           this.view.flxOverlayBrowser.btnOpenBrowser.top = 80.0/100.0 * 90.0/100.0 + "%";
          this.view.flxOverlayBrowser.btnOpenBrowser.left = 40.0/100.0 * 90.0/100.0 + "%"; // this.stateStore.parent.frame.left * 40.0/100.0 * 90.0/100.0 + "px";
          this.view.flxOverlayBrowser.btnOpenBrowser.top = 80.0/100.0 * 90.0/100.0 + "%";
          break;
        case 2:
          this.view.flxOverlayBrowser.btnOpenBrowser.left = this.stateStore.parent.frame.width * 40.0/100.0 * 90.0/100.0 + "px";
          this.view.flxOverlayBrowser.btnOpenBrowser.top = "0px"; //this.view.flxOverlayBrowser.frame.height - (this.view.flxOverlayBrowser.frame.height * 80.0/100.0 * 90.0/100.0) + "px";
          break;
        case 3:
//           this.view.flxOverlayBrowser.btnOpenBrowser.left = 60.0/100.0 * 90.0/100.0 + "%";
//           this.view.flxOverlayBrowser.btnOpenBrowser.top = "0px";
          this.view.flxOverlayBrowser.btnOpenBrowser.left = this.view.flxOverlayBrowser.width - this.view.flxOverlayBrowser.btnOpenBrowser.width + "px";
          this.view.flxOverlayBrowser.btnOpenBrowser.top = this.view.flxOverlayBrowser.height - this.view.flxOverlayBrowser.btnOpenBrowser.height + "px";
          break;
      }
      // Frame
      this.view.flxOverlayBrowser.top = "90%";
      this.view.flxOverlayBrowser.left = "90%";
      this.view.flxOverlayBrowser.height = this.view.flxOverlayBrowser.btnOpenBrowser.frame.height + "px";
      this.view.flxOverlayBrowser.width = this.view.flxOverlayBrowser.btnOpenBrowser.frame.width + "px";
    } else {
      this.view.info.browserActive.active = true;
      // Button 
//       this.view.flxOverlayBrowser.btnOpenBrowser.left = 60.0/100.0 * 90.0/100.0 + "%";
//       this.view.flxOverlayBrowser.btnOpenBrowser.top = "0px";
      // Frame
      this.view.flxOverlayBrowser.setVisibility(true);
      this.view.flxOverlayBrowser.flxFrameBrowser.setVisibility(true);
      this.view.flxOverlayBrowser.flxFrameBrowser.browser.setVisibility(true);
      this.view.flxOverlayBrowser.top = this.stateStore.parent.frame.height - this.stateStore.parent.frame.height * 80.0/100.0 - this.view.flxOverlayBrowser.btnOpenBrowser.frame.height + "px";
      this.view.flxOverlayBrowser.left = this.stateStore.parent.frame.width * 40.0/100.0 + "px";
      this.view.flxOverlayBrowser.height = this.stateStore.parent.frame.height * 80.0/100.0 + "px";
      this.view.flxOverlayBrowser.width = "40%";
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
// //         this.view.flxOverlayBrowser.btnOpenBrowser.left = this.view.flxOverlayBrowser.frame.width * 45.0/100.0 * 90.0/100.0 + "px";
// //         this.view.flxOverlayBrowser.btnOpenBrowser.top = this.view.flxOverlayBrowser.frame.height - (this.view.flxOverlayBrowser.frame.height * 80.0/100.0 * 90.0/100.0) + "px";
//         // Frame
//       	this.view.flxOverlayBrowser.top = "90%";
//       	this.view.flxOverlayBrowser.left = "90%";
//         this.view.flxOverlayBrowser.height = this.view.flxOverlayBrowser.btnOpenBrowser.frame.height + "px";
//         this.view.flxOverlayBrowser.width = this.view.flxOverlayBrowser.btnOpenBrowser.frame.width + "px";
//       } else {
// 		this.view.info.browserActive.active = true;
//         // Button 
// //         this.view.flxOverlayBrowser.btnOpenBrowser.left = "0px";
// //         this.view.flxOverlayBrowser.btnOpenBrowser.top = "0px";
//         // Frame
//         this.view.flxOverlayBrowser.setVisibility(true);
//         this.view.flxOverlayBrowser.flxFrameBrowser.setVisibility(true);
//         this.view.flxOverlayBrowser.flxFrameBrowser.browser.setVisibility(true);
//       	this.view.flxOverlayBrowser.top = this.stateStore.parent.frame.height - this.stateStore.parent.frame.height * 80.0/100.0 - this.stateStore.paddingPx - this.view.flxOverlayBrowser.btnOpenBrowser.frame.height + "px";
//       	this.view.flxOverlayBrowser.left = this.stateStore.parent.frame.width * 45.0/100.0 + "px";
//         this.view.flxOverlayBrowser.height = this.stateStore.parent.frame.height * 80.0/100.0 + "px";
//         this.view.flxOverlayBrowser.width = this.stateStore.parent.frame.width * 40.0/100.0 + "px";
//       }
//     this.view.forceLayout();
//   },
  
 });