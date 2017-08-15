// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_datascript.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('datascript.core');
cljs.core.enable_console_print_BANG_.call(null);
om_datascript.core.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
datascript.core.transact_BANG_.call(null,om_datascript.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","title","app/title",636408784),"Hello, DataScript!",new cljs.core.Keyword("app","count","app/count",2145591446),(0)], null)], null));
if(typeof om_datascript.core.read !== 'undefined'){
} else {
om_datascript.core.read = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-datascript.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.core._add_method.call(null,om_datascript.core.read,new cljs.core.Keyword("app","counter","app/counter",804038354),(function (p__32396,_,___$1){
var map__32397 = p__32396;
var map__32397__$1 = ((((!((map__32397 == null)))?((((map__32397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32397):map__32397);
var state = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__32397__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","title","app/title",636408784)], null)], null),datascript.core.db.call(null,state),query)], null);
}));
if(typeof om_datascript.core.mutate !== 'undefined'){
} else {
om_datascript.core.mutate = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-datascript.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.core._add_method.call(null,om_datascript.core.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__32399,_,entity){
var map__32400 = p__32399;
var map__32400__$1 = ((((!((map__32400 == null)))?((((map__32400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32400):map__32400);
var state = cljs.core.get.call(null,map__32400__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__32400,map__32400__$1,state){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","count","app/count",2145591446)], null),cljs.core.inc)], null));
});})(map__32400,map__32400__$1,state))
], null);
}));
/**
 * @constructor
 */
om_datascript.core.Counter = (function om_datascript$core$Counter(){
var this__26232__auto__ = this;
React.Component.apply(this__26232__auto__,arguments);

if(!((this__26232__auto__.initLocalState == null))){
this__26232__auto__.state = this__26232__auto__.initLocalState();
} else {
this__26232__auto__.state = {};
}

return this__26232__auto__;
});

om_datascript.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x32406_32416 = om_datascript.core.Counter.prototype;
x32406_32416.componentWillUpdate = ((function (x32406_32416){
return (function (next_props__26173__auto__,next_state__26174__auto__){
var this__26172__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__26172__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__26172__auto__);
});})(x32406_32416))
;

x32406_32416.shouldComponentUpdate = ((function (x32406_32416){
return (function (next_props__26173__auto__,next_state__26174__auto__){
var this__26172__auto__ = this;
var or__16832__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__26172__auto__),goog.object.get(next_props__26173__auto__,"omcljs$value"));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = this__26172__auto__.state;
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__26172__auto__.state,"omcljs$state"),goog.object.get(next_state__26174__auto__,"omcljs$state"));
} else {
return and__16820__auto__;
}
}
});})(x32406_32416))
;

x32406_32416.componentWillUnmount = ((function (x32406_32416){
return (function (){
var this__26172__auto__ = this;
var r__26178__auto__ = om.next.get_reconciler.call(null,this__26172__auto__);
var cfg__26179__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__26178__auto__);
var st__26180__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__26179__auto__);
var indexer__26177__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__26179__auto__);
if((st__26180__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__26180__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__26172__auto__);
}

if((indexer__26177__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__26177__auto__,this__26172__auto__);
}
});})(x32406_32416))
;

x32406_32416.componentDidUpdate = ((function (x32406_32416){
return (function (prev_props__26175__auto__,prev_state__26176__auto__){
var this__26172__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__26172__auto__);
});})(x32406_32416))
;

x32406_32416.isMounted = ((function (x32406_32416){
return (function (){
var this__26172__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__26172__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x32406_32416))
;

x32406_32416.componentWillMount = ((function (x32406_32416){
return (function (){
var this__26172__auto__ = this;
var indexer__26177__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__26172__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__26177__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__26177__auto__,this__26172__auto__);
}
});})(x32406_32416))
;

x32406_32416.render = ((function (x32406_32416){
return (function (){
var this__26171__auto__ = this;
var this$ = this__26171__auto__;
var _STAR_reconciler_STAR_32407 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_32408 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_32409 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_32410 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_32411 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__26171__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__26171__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__26171__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__26171__auto__);

om.next._STAR_parent_STAR_ = this__26171__auto__;

try{var map__32412 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354),(0)], null));
var map__32412__$1 = ((((!((map__32412 == null)))?((((map__32412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32412):map__32412);
var entity = map__32412__$1;
var title = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var count = cljs.core.get.call(null,map__32412__$1,new cljs.core.Keyword("app","count","app/count",2145591446));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Count: "),cljs.core.str(count)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__32412,map__32412__$1,entity,title,count,_STAR_reconciler_STAR_32407,_STAR_depth_STAR_32408,_STAR_shared_STAR_32409,_STAR_instrument_STAR_32410,_STAR_parent_STAR_32411,this$,this__26171__auto__,x32406_32416){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity))))))))));
});})(map__32412,map__32412__$1,entity,title,count,_STAR_reconciler_STAR_32407,_STAR_depth_STAR_32408,_STAR_shared_STAR_32409,_STAR_instrument_STAR_32410,_STAR_parent_STAR_32411,this$,this__26171__auto__,x32406_32416))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_32411;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_32410;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_32409;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_32408;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_32407;
}});})(x32406_32416))
;


om_datascript.core.Counter.prototype.constructor = om_datascript.core.Counter;

om_datascript.core.Counter.prototype.constructor.displayName = "om-datascript.core/Counter";

om_datascript.core.Counter.prototype.om$isComponent = true;

var x32414_32417 = om_datascript.core.Counter;
x32414_32417.om$next$IQuery$ = true;

x32414_32417.om$next$IQuery$query$arity$1 = ((function (x32414_32417){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x32414_32417))
;


var x32415_32418 = om_datascript.core.Counter.prototype;
x32415_32418.om$next$IQuery$ = true;

x32415_32418.om$next$IQuery$query$arity$1 = ((function (x32415_32418){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x32415_32418))
;


om_datascript.core.Counter.cljs$lang$type = true;

om_datascript.core.Counter.cljs$lang$ctorStr = "om-datascript.core/Counter";

om_datascript.core.Counter.cljs$lang$ctorPrWriter = (function (this__26234__auto__,writer__26235__auto__,opt__26236__auto__){
return cljs.core._write.call(null,writer__26235__auto__,"om-datascript.core/Counter");
});
om_datascript.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_datascript.core.conn,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_datascript.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_datascript.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_datascript.core.reconciler,om_datascript.core.Counter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map