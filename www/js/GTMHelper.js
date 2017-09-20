/* help with GTM virtual page views
       https://developers.google.com/tag-manager/devguide#events
       https://www.webmethod.co.uk/blog/2015/06/tracking-virtual-pageviews-in-google-tag-manager-google-analytics/
      */
(function GTMHelper(window) {
  this.pushToGTMDataLayer=function(virtualPageUrl, virtualPageTitle, dimension="none"){
    this.virtualPageUrl=virtualPageUrl;
    this.virtualPageTitle= virtualPageTitle;
    this.pageViewWithLocation = pageViewWithLocation

    if (!this.virtualPageUrl || !this.virtualPageTitle){
      console.log("blank page url or title");
    }else{
      dataLayer.push({
        'event': 'VirtualPageview'
        ,'virtualPageURL':this.virtualPageUrl
        ,'virtualPageTitle' : this.virtualPageTitle
        ,'dimension' : this.dimension
    });
      console.log("virtual page view",this.virtualPageTitle ,this.virtualPageUrl, "location - ", this.pageViewWithLocation)
    };
  }
  window.GTMHelper=this;
})(window)

