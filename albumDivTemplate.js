(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albumDiv'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"album\" class=\"album\" data-album= "
    + alias4(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"album","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":51}}}) : helper)))
    + " data-artist= "
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data,"loc":{"start":{"line":1,"column":65},"end":{"line":1,"column":75}}}) : helper)))
    + " data-genre= "
    + alias4(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre","hash":{},"data":data,"loc":{"start":{"line":1,"column":88},"end":{"line":1,"column":97}}}) : helper)))
    + ">\r\n  <img src= "
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":19}}}) : helper)))
    + " class=\"album-pic\">\r\n    <div id=\"songs\" class=\"hidden\">\r\n      Songs go here\r\n    </div>\r\n</div>\r\n";
},"useData":true});
})();