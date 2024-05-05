var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  function insert_object(ob_name) {
    document.write(ob_name);
  }
  function objectWrite(pContainer, pObjectTagString) {
    var oContainer = null;
    if (typeof pContainer === "string") {
      oContainer = document.getElementById(pContainer);
    } else if (typeof pContainer === "object") {
      oContainer = pContainer;
    }
    if (oContainer) {
      oContainer.innerHTML = pObjectTagString;
    }
  }
}
/*
     FILE ARCHIVED ON 01:38:21 Jan 13, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:00:31 May 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.695
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.093
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 109.338 (3)
  PetaboxLoader3.datanode: 99.594 (4)
  PetaboxLoader3.resolve: 259.889 (2)
  load_resource: 290.238
*/
