// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Returns true if x is an ident.
 */
om.next.ident_QMARK_ = (function om$next$ident_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (((2) === cljs.core.count.call(null,x))) && ((cljs.core.nth.call(null,x,(0)) instanceof cljs.core.Keyword));
});
om.next.recursion_QMARK_ = (function om$next$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),x)) || (typeof x === 'number');
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.next.ident_QMARK_.call(null,expr)){
var G__26266 = expr;
var G__26266__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr)))?cljs.core.first.call(null,G__26266):G__26266);
return G__26266__$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__26267_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__26267_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__26267_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__26267_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__26268 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__26268;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(expr){
var expr__$1 = (function (){var G__26270 = expr;
var G__26270__$1 = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,G__26270):G__26270);
return G__26270__$1;
})();
return (cljs.core.map_QMARK_.call(null,expr__$1)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr__$1))));
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__26279 = clojure.zip.down.call(null,loc);
var G__26280 = path__$1;
loc = G__26279;
path__$1 = G__26280;
continue;
} else {
var vec__26278 = path__$1;
var k = cljs.core.nth.call(null,vec__26278,(0),null);
var ks = cljs.core.nthnext.call(null,vec__26278,(1));
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_.call(null,node)){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,loc,k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__26281 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__26282 = cljs.core.next.call(null,ks);
loc = G__26281;
path__$1 = G__26282;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__26283 = loc_SINGLEQUOTE_;
var G__26284 = ks;
loc = G__26283;
path__$1 = G__26284;
continue;
}
} else {
var G__26285 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__26286 = ks;
loc = G__26285;
path__$1 = G__26286;
continue;
}
} else {
var G__26287 = clojure.zip.right.call(null,loc);
var G__26288 = path__$1;
loc = G__26287;
path__$1 = G__26288;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focus_query;
om.next.join_key = (function om$next$join_key(expr){
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return om$next$join_key.call(null,cljs.core.first.call(null,expr));
} else {
return expr;

}
}
});
om.next.join_entry = (function om$next$join_entry(expr){
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
return cljs.core.first.call(null,expr);
}
});
om.next.join_value = (function om$next$join_value(join){
return cljs.core.second.call(null,om.next.join_entry.call(null,join));
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_.call(null,x))?cljs.core.first.call(null,x):x);
return cljs.core.map_QMARK_.call(null,x__$1);
});
om.next.focused_join = (function om$next$focused_join(expr,ks){
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query.call(null,cljs.core.second.call(null,cljs.core.first.call(null,expr)),ks)], true, false);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,expr)),om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks));
} else {
return expr;

}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__26290 = path;
var k = cljs.core.nth.call(null,vec__26290,(0),null);
var ks = cljs.core.nthnext.call(null,vec__26290,(1));
var match = ((function (vec__26290,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.call(null,k,om.next.join_key.call(null,x));
});})(vec__26290,k,ks))
;
var value = ((function (vec__26290,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join.call(null,x,ks);
});})(vec__26290,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query.call(null,cljs.core.get.call(null,query,k),ks)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
om.next.ident_QMARK_;
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args26291 = [];
var len__17890__auto___26295 = arguments.length;
var i__17891__auto___26296 = (0);
while(true){
if((i__17891__auto___26296 < len__17890__auto___26295)){
args26291.push((arguments[i__17891__auto___26296]));

var G__26297 = (i__17891__auto___26296 + (1));
i__17891__auto___26296 = G__26297;
continue;
} else {
}
break;
}

var G__26293 = args26291.length;
switch (G__26293) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26291.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__16820__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__16820__auto__){
var and__16820__auto____$1 = cljs.core.some.call(null,om.next.join_QMARK_,focus);
if(cljs.core.truth_(and__16820__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())){
var vec__26294 = om.next.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__26294,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__26294,(1),null);
var k__$1 = (cljs.core.truth_(om.next.ident_QMARK_.call(null,k))?cljs.core.first.call(null,k):k);
var focus_SINGLEQUOTE___$1 = ((om.next.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__26299 = focus_SINGLEQUOTE___$1;
var G__26300 = bound;
var G__26301 = cljs.core.conj.call(null,path,k__$1);
focus = G__26299;
bound = G__26300;
path = G__26301;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next.ident[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$,props);
} else {
var m__17488__auto____$1 = (om.next.ident["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next.params[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (om.next.params["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next.query[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (om.next.query["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$,new_state);
} else {
var m__17488__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next._get_state[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (om.next._get_state["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next._get_rendered_state[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__16820__auto__ = (x instanceof cljs.core.Symbol);
if(and__16820__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__16820__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(expr){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
return clojure.walk.prewalk.call(null,replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;
om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__26303 = om.next.get_reconciler.call(null,component);
var G__26303__$1 = (((G__26303 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__26303));
var G__26303__$2 = (((G__26303__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__26303__$1));
var G__26303__$3 = (((G__26303__$2 == null))?null:cljs.core.deref.call(null,G__26303__$2));
var G__26303__$4 = (((G__26303__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__26303__$3));
var G__26303__$5 = (((G__26303__$4 == null))?null:cljs.core.get.call(null,G__26303__$4,component));
return G__26303__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data.call(null,c);
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(qps,om.next.query.call(null,c));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c'","c'",-167114389,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(qps,om.next.params.call(null,c))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,c)], null));
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = Object.create(x.prototype);
if(!((x__$1 == null))){
if((false) || (x__$1.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var y = Object.create(x.prototype);
if(((!((y == null)))?(((false) || (y.om$next$IQuery$))?true:false):false)){
var q = om.next.query.call(null,y);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(y),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,y)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args26312 = [];
var len__17890__auto___26320 = arguments.length;
var i__17891__auto___26321 = (0);
while(true){
if((i__17891__auto___26321 < len__17890__auto___26320)){
args26312.push((arguments[i__17891__auto___26321]));

var G__26322 = (i__17891__auto___26321 + (1));
i__17891__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var G__26314 = args26312.length;
switch (G__26314) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26312.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__26315){
var map__26316 = p__26315;
var map__26316__$1 = ((((!((map__26316 == null)))?((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26316):map__26316);
var opts = map__26316__$1;
var validator = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"class","class",-390430469,null))))].join('')));
}

return ((function (map__26316,map__26316__$1,opts,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"props","props",2093813254,null))))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om$next$self], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__26319 = ref;
var G__26319__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__26319)].join(''):G__26319);
return G__26319__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,{"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_},om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__26324__i = 0, G__26324__a = new Array(arguments.length -  1);
while (G__26324__i < G__26324__a.length) {G__26324__a[G__26324__i] = arguments[G__26324__i + 1]; ++G__26324__i;}
  children = new cljs.core.IndexedSeq(G__26324__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__26325){
var props = cljs.core.first(arglist__26325);
var children = cljs.core.rest(arglist__26325);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__26316,map__26316__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args26326 = [];
var len__17890__auto___26329 = arguments.length;
var i__17891__auto___26330 = (0);
while(true){
if((i__17891__auto___26330 < len__17890__auto___26329)){
args26326.push((arguments[i__17891__auto___26330]));

var G__26331 = (i__17891__auto___26330 + (1));
i__17891__auto___26330 = G__26331;
continue;
} else {
}
break;
}

var G__26328 = args26326.length;
switch (G__26328) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26326.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args26333 = [];
var len__17890__auto___26336 = arguments.length;
var i__17891__auto___26337 = (0);
while(true){
if((i__17891__auto___26337 < len__17890__auto___26336)){
args26333.push((arguments[i__17891__auto___26337]));

var G__26338 = (i__17891__auto___26337 + (1));
i__17891__auto___26337 = G__26338;
continue;
} else {
}
break;
}

var G__26335 = args26333.length;
switch (G__26335) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26333.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__16832__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args26340 = [];
var len__17890__auto___26345 = arguments.length;
var i__17891__auto___26346 = (0);
while(true){
if((i__17891__auto___26346 < len__17890__auto___26345)){
args26340.push((arguments[i__17891__auto___26346]));

var G__26347 = (i__17891__auto___26346 + (1));
i__17891__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var G__26342 = args26340.length;
switch (G__26342) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26340.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__26343 = k_or_ks;
var G__26343__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__26343],null)):G__26343);
return G__26343__$1;
})();
var G__26344 = shared;
var G__26344__$1 = ((!(cljs.core.empty_QMARK_.call(null,ks)))?cljs.core.get_in.call(null,G__26344,ks):G__26344);
return G__26344__$1;
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

var G__26350 = c.state;
goog.object.set(G__26350,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__26350;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__26353 = props;
var G__26353__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.vary_meta.call(null,G__26353,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__26353);
return G__26353__$1;
} else {
var G__26354 = props;
var G__26354__$1 = ((!(cljs.core.empty_QMARK_.call(null,computed_map)))?cljs.core.assoc.call(null,G__26354,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map):G__26354);
return G__26354__$1;
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args26355 = [];
var len__17890__auto___26360 = arguments.length;
var i__17891__auto___26361 = (0);
while(true){
if((i__17891__auto___26361 < len__17890__auto___26360)){
args26355.push((arguments[i__17891__auto___26361]));

var G__26362 = (i__17891__auto___26361 + (1));
i__17891__auto___26361 = G__26362;
continue;
} else {
}
break;
}

var G__26357 = args26355.length;
switch (G__26357) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26355.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__26358 = x;
var G__26358__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__26358):G__26358);
return G__26358__$1;
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__26359 = k_or_ks;
var G__26359__$1 = ((!(cljs.core.sequential_QMARK_.call(null,k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__26359],null)):G__26359);
return G__26359__$1;
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__4423__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args26366 = [];
var len__17890__auto___26370 = arguments.length;
var i__17891__auto___26371 = (0);
while(true){
if((i__17891__auto___26371 < len__17890__auto___26370)){
args26366.push((arguments[i__17891__auto___26371]));

var G__26372 = (i__17891__auto___26371 + (1));
i__17891__auto___26371 = G__26372;
continue;
} else {
}
break;
}

var G__26368 = args26366.length;
switch (G__26368) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26366.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__16832__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args26374 = [];
var len__17890__auto___26384 = arguments.length;
var i__17891__auto___26385 = (0);
while(true){
if((i__17891__auto___26385 < len__17890__auto___26384)){
args26374.push((arguments[i__17891__auto___26385]));

var G__26386 = (i__17891__auto___26385 + (1));
i__17891__auto___26385 = G__26386;
continue;
} else {
}
break;
}

var G__26383 = args26374.length;
switch (G__26383) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__17909__auto__ = (new cljs.core.IndexedSeq(args26374.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__17909__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq26375){
var G__26376 = cljs.core.first.call(null,seq26375);
var seq26375__$1 = cljs.core.next.call(null,seq26375);
var G__26377 = cljs.core.first.call(null,seq26375__$1);
var seq26375__$2 = cljs.core.next.call(null,seq26375__$1);
var G__26378 = cljs.core.first.call(null,seq26375__$2);
var seq26375__$3 = cljs.core.next.call(null,seq26375__$2);
var G__26379 = cljs.core.first.call(null,seq26375__$3);
var seq26375__$4 = cljs.core.next.call(null,seq26375__$3);
var G__26380 = cljs.core.first.call(null,seq26375__$4);
var seq26375__$5 = cljs.core.next.call(null,seq26375__$4);
var G__26381 = cljs.core.first.call(null,seq26375__$5);
var seq26375__$6 = cljs.core.next.call(null,seq26375__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26376,G__26377,G__26378,G__26379,G__26380,G__26381,seq26375__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
return om.next._get_rendered_state.call(null,component);
} else {
var G__26391 = component;
var G__26391__$1 = (((G__26391 == null))?null:G__26391.state);
var G__26391__$2 = (((G__26391__$1 == null))?null:goog.object.get(G__26391__$1,"omcljs$state"));
return G__26391__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__4425__auto__ = (function (){var G__26395 = c;
var G__26395__$1 = (((G__26395 == null))?null:G__26395.state);
var G__26395__$2 = (((G__26395__$1 == null))?null:goog.object.get(G__26395__$1,"omcljs$pendingState"));
return G__26395__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args26396 = [];
var len__17890__auto___26399 = arguments.length;
var i__17891__auto___26400 = (0);
while(true){
if((i__17891__auto___26400 < len__17890__auto___26399)){
args26396.push((arguments[i__17891__auto___26400]));

var G__26401 = (i__17891__auto___26400 + (1));
i__17891__auto___26400 = G__26401;
continue;
} else {
}
break;
}

var G__26398 = args26396.length;
switch (G__26398) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26396.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
om.next.full_query;

om.next.to_env;

om.next.schedule_sends_BANG_;

om.next.reconciler_QMARK_;

om.next.ref__GT_components;

om.next.force;
om.next.gather_sends = (function om$next$gather_sends(p__26404,q,remotes){
var map__26409 = p__26404;
var map__26409__$1 = ((((!((map__26409 == null)))?((((map__26409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26409):map__26409);
var env = map__26409__$1;
var parser = cljs.core.get.call(null,map__26409__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__26409,map__26409__$1,env,parser){
return (function (p1__26403_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__26403_SHARP_,parser.call(null,env,q,p1__26403_SHARP_)],null));
});})(map__26409,map__26409__$1,env,parser))
),cljs.core.filter.call(null,((function (map__26409,map__26409__$1,env,parser){
return (function (p__26411){
var vec__26412 = p__26411;
var _ = cljs.core.nth.call(null,vec__26412,(0),null);
var v = cljs.core.nth.call(null,vec__26412,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__26409,map__26409__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.call(null,tx__$1,om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)))));
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__26415 = cljs.core.next.call(null,exprs);
var G__26416 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__26413_SHARP_,p2__26414_SHARP_){
return add_focused_query.call(null,key,tgt,p1__26413_SHARP_,p2__26414_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,om.next.ref__GT_components.call(null,r,key));
exprs = G__26415;
tx_SINGLEQUOTE_ = G__26416;
continue;
} else {
var G__26417 = cljs.core.next.call(null,exprs);
var G__26418 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__26417;
tx_SINGLEQUOTE_ = G__26418;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args26419 = [];
var len__17890__auto___26426 = arguments.length;
var i__17891__auto___26427 = (0);
while(true){
if((i__17891__auto___26427 < len__17890__auto___26426)){
args26419.push((arguments[i__17891__auto___26427]));

var G__26428 = (i__17891__auto___26427 + (1));
i__17891__auto___26427 = G__26428;
continue;
} else {
}
break;
}

var G__26421 = args26419.length;
switch (G__26421) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26419.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__26422,reads){
var map__26423 = p__26422;
var map__26423__$1 = ((((!((map__26423 == null)))?((((map__26423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);
var params = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__16832__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"query","query",352022017,null))))))].join('')));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"reads","reads",425464166,null)))))].join('')));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));
var temp__4425__auto___26430 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto___26430)){
var l_26431 = temp__4425__auto___26430;
goog.log.info(l_26431,[cljs.core.str((function (){var temp__4425__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var ident = temp__4425__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__16832__auto__ = c;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_26432 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_26433 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__16832__auto__ = rootq_26432;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_26433)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_26433);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args26434 = [];
var len__17890__auto___26444 = arguments.length;
var i__17891__auto___26445 = (0);
while(true){
if((i__17891__auto___26445 < len__17890__auto___26444)){
args26434.push((arguments[i__17891__auto___26445]));

var G__26446 = (i__17891__auto___26445 + (1));
i__17891__auto___26445 = G__26446;
continue;
} else {
}
break;
}

var G__26443 = args26434.length;
switch (G__26443) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__17909__auto__ = (new cljs.core.IndexedSeq(args26434.slice((6)),(0)));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__17909__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return cljs.core.apply.call(null,om.next.set_query_BANG_,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq26435){
var G__26436 = cljs.core.first.call(null,seq26435);
var seq26435__$1 = cljs.core.next.call(null,seq26435);
var G__26437 = cljs.core.first.call(null,seq26435__$1);
var seq26435__$2 = cljs.core.next.call(null,seq26435__$1);
var G__26438 = cljs.core.first.call(null,seq26435__$2);
var seq26435__$3 = cljs.core.next.call(null,seq26435__$2);
var G__26439 = cljs.core.first.call(null,seq26435__$3);
var seq26435__$4 = cljs.core.next.call(null,seq26435__$3);
var G__26440 = cljs.core.first.call(null,seq26435__$4);
var seq26435__$5 = cljs.core.next.call(null,seq26435__$4);
var G__26441 = cljs.core.first.call(null,seq26435__$5);
var seq26435__$6 = cljs.core.next.call(null,seq26435__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26436,G__26437,G__26438,G__26439,G__26440,G__26441,seq26435__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__26449 = component.refs;
var G__26449__$1 = (((G__26449 == null))?null:goog.object.get(G__26449,name));
return G__26449__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args26450 = [];
var len__17890__auto___26453 = arguments.length;
var i__17891__auto___26454 = (0);
while(true){
if((i__17891__auto___26454 < len__17890__auto___26453)){
args26450.push((arguments[i__17891__auto___26454]));

var G__26455 = (i__17891__auto___26454 + (1));
i__17891__auto___26454 = G__26455;
continue;
} else {
}
break;
}

var G__26452 = args26450.length;
switch (G__26452) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26450.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_.call(null,c)], null)], null);

var c__$1 = c;
var ret = cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,c__$1));
while(true){
var temp__4423__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__26457 = p;
var G__26458 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__26457;
ret = G__26458;
continue;
} else {
var G__26459 = p;
var G__26460 = ret;
c__$1 = G__26459;
ret = G__26460;
continue;
}
} else {
var seen = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.take_while.call(null,((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),x)){
return null;
} else {
cljs.core.swap_BANG_.call(null,seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"subquery-ref","subquery-ref",1353295365,null)))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"subquery-class","subquery-class",-917164088,null))))].join('')));
}

var ref = (function (){var G__26462 = subquery_ref;
var G__26462__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__26462)].join(''):G__26462);
return G__26462__$1;
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"component","component",-1098498987,null))))].join('')));
}

return om.next.ident.call(null,component,om.next.props.call(null,component));
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
});
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args26463 = [];
var len__17890__auto___26466 = arguments.length;
var i__17891__auto___26467 = (0);
while(true){
if((i__17891__auto___26467 < len__17890__auto___26466)){
args26463.push((arguments[i__17891__auto___26467]));

var G__26468 = (i__17891__auto___26467 + (1));
i__17891__auto___26467 = G__26468;
continue;
} else {
}
break;
}

var G__26465 = args26463.length;
switch (G__26465) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26463.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"root-class","root-class",1372859229,null))))].join('')));
}

var temp__4425__auto___26470 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__4425__auto___26470)){
var old_reconciler_26471 = temp__4425__auto___26470;
om.next.remove_root_BANG_.call(null,old_reconciler_26471,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__17487__auto__ = (((c == null))?null:c);
var m__17488__auto__ = (om.next.tx_intercept[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,c,tx);
} else {
var m__17488__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__16820__auto__ = c;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__16820__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto__)){
var l = temp__4425__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__26477 = cljs.core.PersistentVector.EMPTY;
var G__26477__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__26477,c):G__26477);
var G__26477__$2 = ((!((ref__$1 == null)))?cljs.core.conj.call(null,G__26477__$1,ref__$1):G__26477__$1);
return G__26477__$2;
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

return om.next.schedule_sends_BANG_.call(null,r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args26478 = [];
var len__17890__auto___26483 = arguments.length;
var i__17891__auto___26484 = (0);
while(true){
if((i__17891__auto___26484 < len__17890__auto___26483)){
args26478.push((arguments[i__17891__auto___26484]));

var G__26485 = (i__17891__auto___26484 + (1));
i__17891__auto___26484 = G__26485;
continue;
} else {
}
break;
}

var G__26480 = args26478.length;
switch (G__26480) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26478.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__16832__auto__ = om.next.component_QMARK_.call(null,x);
if(or__16832__auto__){
return or__16832__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null))))].join('')));
}

if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx);
} else {
if(om.next.iquery_QMARK_.call(null,x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"iquery?","iquery?",951893833,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$1 = tx;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$1));
} else {
var vec__26481 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$1], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__26481,(0),null);
var tx__$2 = cljs.core.nth.call(null,vec__26481,(1),null);
var G__26487 = om.next.parent.call(null,p);
var G__26488 = x_SINGLEQUOTE_;
var G__26489 = tx__$2;
p = G__26487;
x__$1 = G__26488;
tx__$1 = G__26489;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__26490){
var map__26493 = p__26490;
var map__26493__$1 = ((((!((map__26493 == null)))?((((map__26493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493):map__26493);
var opts = map__26493__$1;
var read = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__26501 = x;
var G__26501__$1 = ((om.next.component_QMARK_.call(null,x))?cljs.core.type.call(null,G__26501):G__26501);
return G__26501__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath){
var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__26547 = classpath;
var G__26547__$1 = (((!((class$__$1 == null))) && (cljs.core.not.call(null,recursive_QMARK_)))?cljs.core.conj.call(null,G__26547,class$__$1):G__26547);
return G__26547__$1;
})();
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var map__26548 = cljs.core.group_by.call(null,om.next.join_QMARK_,query);
var map__26548__$1 = ((((!((map__26548 == null)))?((((map__26548.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26548.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26548):map__26548);
var props = cljs.core.get.call(null,map__26548__$1,false);
var joins = cljs.core.get.call(null,map__26548__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26495_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__26495_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast),props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__26550 = cljs.core.seq.call(null,joins);
var chunk__26551 = null;
var count__26552 = (0);
var i__26553 = (0);
while(true){
if((i__26553 < count__26552)){
var join = cljs.core._nth.call(null,chunk__26551,i__26553);
var vec__26554_26570 = om.next.join_entry.call(null,join);
var prop_26571 = cljs.core.nth.call(null,vec__26554_26570,(0),null);
var query_SINGLEQUOTE__26572 = cljs.core.nth.call(null,vec__26554_26570,(1),null);
var query_SINGLEQUOTE__26573__$1 = ((om.next.recursion_QMARK_.call(null,query_SINGLEQUOTE__26572))?query:query_SINGLEQUOTE__26572);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__26550,chunk__26551,count__26552,i__26553,vec__26554_26570,prop_26571,query_SINGLEQUOTE__26572,query_SINGLEQUOTE__26573__$1,join,map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26496_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__26496_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_26571,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__26550,chunk__26551,count__26552,i__26553,vec__26554_26570,prop_26571,query_SINGLEQUOTE__26572,query_SINGLEQUOTE__26573__$1,join,map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__26574 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__26573__$1));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__26574,query_SINGLEQUOTE__26573__$1,cljs.core.conj.call(null,path,prop_26571),classpath__$1);

var G__26575 = seq__26550;
var G__26576 = chunk__26551;
var G__26577 = count__26552;
var G__26578 = (i__26553 + (1));
seq__26550 = G__26575;
chunk__26551 = G__26576;
count__26552 = G__26577;
i__26553 = G__26578;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26550);
if(temp__4425__auto__){
var seq__26550__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26550__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__26550__$1);
var G__26579 = cljs.core.chunk_rest.call(null,seq__26550__$1);
var G__26580 = c__17635__auto__;
var G__26581 = cljs.core.count.call(null,c__17635__auto__);
var G__26582 = (0);
seq__26550 = G__26579;
chunk__26551 = G__26580;
count__26552 = G__26581;
i__26553 = G__26582;
continue;
} else {
var join = cljs.core.first.call(null,seq__26550__$1);
var vec__26555_26583 = om.next.join_entry.call(null,join);
var prop_26584 = cljs.core.nth.call(null,vec__26555_26583,(0),null);
var query_SINGLEQUOTE__26585 = cljs.core.nth.call(null,vec__26555_26583,(1),null);
var query_SINGLEQUOTE__26586__$1 = ((om.next.recursion_QMARK_.call(null,query_SINGLEQUOTE__26585))?query:query_SINGLEQUOTE__26585);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__26550,chunk__26551,count__26552,i__26553,vec__26555_26583,prop_26584,query_SINGLEQUOTE__26585,query_SINGLEQUOTE__26586__$1,join,seq__26550__$1,temp__4425__auto__,map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__26496_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__26496_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_26584,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__26550,chunk__26551,count__26552,i__26553,vec__26555_26583,prop_26584,query_SINGLEQUOTE__26585,query_SINGLEQUOTE__26586__$1,join,seq__26550__$1,temp__4425__auto__,map__26548,map__26548__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__26587 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__26586__$1));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__26587,query_SINGLEQUOTE__26586__$1,cljs.core.conj.call(null,path,prop_26584),classpath__$1);

var G__26588 = cljs.core.next.call(null,seq__26550__$1);
var G__26589 = null;
var G__26590 = (0);
var G__26591 = (0);
seq__26550 = G__26588;
chunk__26551 = G__26589;
count__26552 = G__26590;
i__26553 = G__26591;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__26556 = cljs.core.seq.call(null,query);
var chunk__26557 = null;
var count__26558 = (0);
var i__26559 = (0);
while(true){
if((i__26559 < count__26558)){
var vec__26560 = cljs.core._nth.call(null,chunk__26557,i__26559);
var prop = cljs.core.nth.call(null,vec__26560,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__26560,(1),null);
var class_SINGLEQUOTE__26592 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__26592,query_SINGLEQUOTE_,cljs.core.conj.call(null,path,prop),classpath__$1);

var G__26593 = seq__26556;
var G__26594 = chunk__26557;
var G__26595 = count__26558;
var G__26596 = (i__26559 + (1));
seq__26556 = G__26593;
chunk__26557 = G__26594;
count__26558 = G__26595;
i__26559 = G__26596;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26556);
if(temp__4425__auto__){
var seq__26556__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__26556__$1);
var G__26597 = cljs.core.chunk_rest.call(null,seq__26556__$1);
var G__26598 = c__17635__auto__;
var G__26599 = cljs.core.count.call(null,c__17635__auto__);
var G__26600 = (0);
seq__26556 = G__26597;
chunk__26557 = G__26598;
count__26558 = G__26599;
i__26559 = G__26600;
continue;
} else {
var vec__26561 = cljs.core.first.call(null,seq__26556__$1);
var prop = cljs.core.nth.call(null,vec__26561,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__26561,(1),null);
var class_SINGLEQUOTE__26601 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__26601,query_SINGLEQUOTE_,cljs.core.conj.call(null,path,prop),classpath__$1);

var G__26602 = cljs.core.next.call(null,seq__26556__$1);
var G__26603 = null;
var G__26604 = (0);
var G__26605 = (0);
seq__26556 = G__26602;
chunk__26557 = G__26603;
count__26558 = G__26604;
i__26559 = G__26605;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__26255__auto___26606 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.ident_QMARK_.call(null,ident))){
} else {
goog.log.error(l__26255__auto___26606,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__26563 = indexes__$2;
var G__26563__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__26563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__26563);
return G__26563__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__26565 = indexes__$2;
var G__26565__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.call(null,G__26565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c):G__26565);
return G__26565__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4423__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cs = temp__4423__auto__;
return cs;
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,temp__4423__auto__,indexes__$1,___$1){
return (function (p1__26497_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__26497_SHARP_], null));
});})(cs__$1,cs,temp__4423__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k26499,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__26566 = (((k26499 instanceof cljs.core.Keyword))?k26499.fqn:null);
switch (G__26566) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26499,else__17449__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#om.next.Indexer{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26498){
var self__ = this;
var G__26498__$1 = this;
return (new cljs.core.RecordIter((0),G__26498__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var h__17267__auto__ = self__.__hash;
if(!((h__17267__auto__ == null))){
return h__17267__auto__;
} else {
var h__17267__auto____$1 = cljs.core.hash_imap.call(null,this__17441__auto____$1);
self__.__hash = h__17267__auto____$1;

return h__17267__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16820__auto__ = other__17443__auto__;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = (this__17442__auto____$1.constructor === other__17443__auto__.constructor);
if(and__16820__auto____$1){
return cljs.core.equiv_map.call(null,this__17442__auto____$1,other__17443__auto__);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__26498){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__26567 = cljs.core.keyword_identical_QMARK_;
var expr__26568 = k__17454__auto__;
if(cljs.core.truth_(pred__26567.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__26568))){
return (new om.next.Indexer(G__26498,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26567.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__26568))){
return (new om.next.Indexer(self__.indexes,G__26498,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__26498),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__26498){
var self__ = this;
var this__17445__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__26498,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__26500){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__26500),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__26500),null,cljs.core.dissoc.call(null,G__26500,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args26608 = [];
var len__17890__auto___26611 = arguments.length;
var i__17891__auto___26612 = (0);
while(true){
if((i__17891__auto___26612 < len__17890__auto___26611)){
args26608.push((arguments[i__17891__auto___26612]));

var G__26613 = (i__17891__auto___26612 + (1));
i__17891__auto___26612 = G__26613;
continue;
} else {
}
break;
}

var G__26610 = args26608.length;
switch (G__26610) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26608.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args26616 = [];
var len__17890__auto___26619 = arguments.length;
var i__17891__auto___26620 = (0);
while(true){
if((i__17891__auto___26620 < len__17890__auto___26619)){
args26616.push((arguments[i__17891__auto___26620]));

var G__26621 = (i__17891__auto___26620 + (1));
i__17891__auto___26620 = G__26621;
continue;
} else {
}
break;
}

var G__26618 = args26616.length;
switch (G__26618) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26616.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__26615_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__26615_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))){
return Object.create(class$.prototype);
} else {
return class$;
}
}
});
om.next.unique_ident_QMARK_ = (function om$next$unique_ident_QMARK_(x){
var and__16820__auto__ = om.next.ident_QMARK_.call(null,x);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,x));
} else {
return and__16820__auto__;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query)));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.next.join_QMARK_.call(null,expr))){
var vec__26636 = om.next.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__26636,(0),null);
var sel = cljs.core.nth.call(null,vec__26636,(1),null);
var recursive_QMARK_ = om.next.recursion_QMARK_.call(null,sel);
var union_entry = ((om.next.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = om.next.to_class.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1)));
var v = cljs.core.get.call(null,data,k);
if(cljs.core.truth_((function (){var and__16820__auto__ = recursive_QMARK_;
if(and__16820__auto__){
return om.next.ident_QMARK_.call(null,v);
} else {
return and__16820__auto__;
}
})())){
var G__26643 = cljs.core.next.call(null,q);
var G__26644 = ret;
q = G__26643;
ret = G__26644;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__26645 = cljs.core.next.call(null,q);
var G__26646 = cljs.core.assoc.call(null,ret,k,i);
q = G__26645;
ret = G__26646;
continue;
} else {
var G__26647 = cljs.core.next.call(null,q);
var G__26648 = cljs.core.assoc.call(null,ret,k,x);
q = G__26647;
ret = G__26648;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__26625_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__26625_SHARP_,refs,union_entry);
});})(q,ret,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__26626_SHARP_){
return om.next.ident.call(null,class$,p1__26626_SHARP_);
});})(q,ret,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__26641){
var vec__26642 = p__26641;
var i = cljs.core.nth.call(null,vec__26642,(0),null);
var x = cljs.core.nth.call(null,vec__26642,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__26636,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__26649 = cljs.core.next.call(null,q);
var G__26650 = cljs.core.assoc.call(null,ret,k,is);
q = G__26649;
ret = G__26650;
continue;
} else {
var G__26651 = cljs.core.next.call(null,q);
var G__26652 = cljs.core.assoc.call(null,ret,k,xs);
q = G__26651;
ret = G__26652;
continue;
}
} else {
if((v == null)){
var G__26653 = cljs.core.next.call(null,q);
var G__26654 = ret;
q = G__26653;
ret = G__26654;
continue;
} else {
var G__26655 = cljs.core.next.call(null,q);
var G__26656 = cljs.core.assoc.call(null,ret,k,v);
q = G__26655;
ret = G__26656;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__26657 = cljs.core.next.call(null,q);
var G__26658 = ret;
q = G__26657;
ret = G__26658;
continue;
} else {
var G__26659 = cljs.core.next.call(null,q);
var G__26660 = cljs.core.assoc.call(null,ret,k,v);
q = G__26659;
ret = G__26660;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args26661 = [];
var len__17890__auto___26664 = arguments.length;
var i__17891__auto___26665 = (0);
while(true){
if((i__17891__auto___26665 < len__17890__auto___26664)){
args26661.push((arguments[i__17891__auto___26665]));

var G__26666 = (i__17891__auto___26665 + (1));
i__17891__auto___26665 = G__26666;
continue;
} else {
}
break;
}

var G__26663 = args26661.length;
switch (G__26663) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26661.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_idents = (function om$next$sift_idents(res){
var map__26671 = cljs.core.group_by.call(null,(function (p1__26668_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__26668_SHARP_));
}),res);
var map__26671__$1 = ((((!((map__26671 == null)))?((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var idents = cljs.core.get.call(null,map__26671__$1,true);
var rest = cljs.core.get.call(null,map__26671__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__26674 = node;
var G__26674__$1 = ((typeof node === 'number')?(G__26674 - (1)):G__26674);
return G__26674__$1;
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__26677){
var vec__26678 = p__26677;
var k = cljs.core.nth.call(null,vec__26678,(0),null);
var q = cljs.core.nth.call(null,vec__26678,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"refs","refs",80480079,null))))].join('')));
}

var data__$1 = (function (){var G__26693 = data;
var G__26693__$1 = (cljs.core.truth_(om.next.ident_QMARK_.call(null,data))?cljs.core.get_in.call(null,refs,map_ident.call(null,G__26693)):G__26693);
return G__26693__$1;
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (data__$1){
return (function (ident){
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var union_recur_QMARK_ = (function (){var and__16820__auto__ = union_expr;
if(cljs.core.truth_(and__16820__auto__)){
return recurse_key;
} else {
return and__16820__auto__;
}
})();
var query__$1 = (function (){var G__26694 = query;
var G__26694__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__26694,recurse_key):G__26694);
return G__26694__$1;
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__26695 = union_expr;
var G__26695__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth.call(null,G__26695,recurse_key):G__26695);
return G__26695__$1;
})();
var query_SINGLEQUOTE_ = (function (){var G__26696 = query__$1;
var G__26696__$1 = ((cljs.core.map_QMARK_.call(null,query__$1))?cljs.core.get.call(null,G__26696,cljs.core.first.call(null,ident)):G__26696);
return G__26696__$1;
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
});})(data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__26697 = cljs.core.group_by.call(null,((function (data__$1){
return (function (p1__26679_SHARP_){
var or__16832__auto__ = om.next.join_QMARK_.call(null,p1__26679_SHARP_);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return om.next.ident_QMARK_.call(null,p1__26679_SHARP_);
}
});})(data__$1))
,query);
var map__26697__$1 = ((((!((map__26697 == null)))?((((map__26697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26697):map__26697);
var props = cljs.core.get.call(null,map__26697__$1,false);
var joins = cljs.core.get.call(null,map__26697__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__26697,map__26697__$1,props,joins,data__$1){
return (function (p1__26680_SHARP_){
var G__26699 = p1__26680_SHARP_;
var G__26699__$1 = ((cljs.core.seq_QMARK_.call(null,p1__26680_SHARP_))?cljs.core.first.call(null,G__26699):G__26699);
return G__26699__$1;
});})(map__26697,map__26697__$1,props,joins,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__26701 = join;
var G__26701__$1 = (cljs.core.truth_(om.next.ident_QMARK_.call(null,join))?cljs.core.PersistentHashMap.fromArrays([G__26701],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]):G__26701);
return G__26701__$1;
})();
var vec__26700 = om.next.join_entry.call(null,join__$1);
var key = cljs.core.nth.call(null,vec__26700,(0),null);
var sel = cljs.core.nth.call(null,vec__26700,(1),null);
var recurse_QMARK_ = om.next.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = (cljs.core.truth_(om.next.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__26702 = key;
var G__26702__$1 = ((om.next.unique_ident_QMARK_.call(null,key))?cljs.core.first.call(null,G__26702):G__26702);
return G__26702__$1;
})();
var v__$1 = (cljs.core.truth_(om.next.ident_QMARK_.call(null,v))?map_ident.call(null,v):v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.next.union_QMARK_.call(null,join__$1))?sel:union_expr);
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__16820__auto__ = om.next.ident_QMARK_.call(null,key__$1);
if(cljs.core.truth_(and__16820__auto__)){
return om.next.union_QMARK_.call(null,join__$1);
} else {
return and__16820__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):(cljs.core.truth_((function (){var and__16820__auto__ = om.next.ident_QMARK_.call(null,v__$1);
if(cljs.core.truth_(and__16820__auto__)){
return om.next.union_QMARK_.call(null,join__$1);
} else {
return and__16820__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__16820__auto__ = om.next.ident_QMARK_.call(null,v__$1);
if(cljs.core.truth_(and__16820__auto__)){
return recurse_QMARK_;
} else {
return and__16820__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__26705 = cljs.core.next.call(null,joins__$1);
var G__26706 = ret;
joins__$1 = G__26705;
ret = G__26706;
continue;
} else {
if(graph_loop_QMARK_){
var G__26707 = cljs.core.next.call(null,joins__$1);
var G__26708 = ret;
joins__$1 = G__26707;
ret = G__26708;
continue;
} else {
if((v__$1 == null)){
var G__26709 = cljs.core.next.call(null,joins__$1);
var G__26710 = ret;
joins__$1 = G__26709;
ret = G__26710;
continue;
} else {
var G__26711 = cljs.core.next.call(null,joins__$1);
var G__26712 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__26711;
ret = G__26712;
continue;

}
}
}
} else {
var temp__4423__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__26697,map__26697__$1,props,joins,props__$1,data__$1){
return (function (p__26703){
var vec__26704 = p__26703;
var k = cljs.core.nth.call(null,vec__26704,(0),null);
var identset = cljs.core.nth.call(null,vec__26704,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__26697,map__26697__$1,props,joins,props__$1,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__4423__auto__)){
var looped_key = temp__4423__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args26713 = [];
var len__17890__auto___26716 = arguments.length;
var i__17891__auto___26717 = (0);
while(true){
if((i__17891__auto___26717 < len__17890__auto___26716)){
args26713.push((arguments[i__17891__auto___26717]));

var G__26718 = (i__17891__auto___26717 + (1));
i__17891__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var G__26715 = args26713.length;
switch (G__26715) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26713.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__26731){
var vec__26733 = p__26731;
var k = cljs.core.nth.call(null,vec__26733,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__26733,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__26733,k,orig_paths){
return (function (p1__26720_SHARP_,p2__26721_SHARP_){
return cljs.core.assoc_in.call(null,p1__26720_SHARP_,cljs.core.conj.call(null,p2__26721_SHARP_,k),to_move);
});})(to_move,vec__26733,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.next.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__26734_SHARP_){
return om$next$move_roots.call(null,p1__26734_SHARP_,result_roots,cljs.core.conj.call(null,path,om.next.join_key.call(null,join)));
}),om.next.join_value.call(null,join));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__16820__auto__ = om.next.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__16820__auto__)){
return (!(om.next.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__16820__auto__;
}
})())?(function (){var jk = om.next.join_key.call(null,expr);
var jv = om.next.join_value.call(null,expr);
var q = (function (){var or__16832__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.next.recursion_QMARK_.call(null,q))?q:((om.next.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__26737){
var vec__26738 = p__26737;
var jkey = cljs.core.nth.call(null,vec__26738,(0),null);
var jsel = cljs.core.nth.call(null,vec__26738,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__26748){
var vec__26750 = p__26748;
var expr = cljs.core.nth.call(null,vec__26750,(0),null);
var path = cljs.core.nth.call(null,vec__26750,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__26760 = config;
var map__26760__$1 = ((((!((map__26760 == null)))?((((map__26760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26760):map__26760);
var merge_ident = cljs.core.get.call(null,map__26760__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__26760__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__26760,map__26760__$1,merge_ident,indexer){
return (function (p1__26751_SHARP_){
var and__16820__auto__ = om.next.join_QMARK_.call(null,p1__26751_SHARP_);
if(cljs.core.truth_(and__16820__auto__)){
return om.next.ident_QMARK_.call(null,om.next.join_key.call(null,p1__26751_SHARP_));
} else {
return and__16820__auto__;
}
});})(map__26760,map__26760__$1,merge_ident,indexer))
,query));
var step = ((function (map__26760,map__26760__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__26765){
var vec__26767 = p__26765;
var ident = cljs.core.nth.call(null,vec__26767,(0),null);
var props = cljs.core.nth.call(null,vec__26767,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__16832__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__26760,map__26760__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__26769 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__26769,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__26769,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__16832__auto__ = query;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args26770 = [];
var len__17890__auto___26775 = arguments.length;
var i__17891__auto___26776 = (0);
while(true){
if((i__17891__auto___26776 < len__17890__auto___26775)){
args26770.push((arguments[i__17891__auto___26776]));

var G__26777 = (i__17891__auto___26776 + (1));
i__17891__auto___26776 = G__26777;
continue;
} else {
}
break;
}

var G__26772 = args26770.length;
switch (G__26772) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26770.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__26773 = merge.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__26773__$1 = ((((!((map__26773 == null)))?((((map__26773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26773):map__26773);
var keys = cljs.core.get.call(null,map__26773__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__26773__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__26773__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4423__auto__)){
var migrate = temp__4423__auto__;
return migrate.call(null,next,(function (){var or__16832__auto__ = query;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k26784,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__26786 = (((k26784 instanceof cljs.core.Keyword))?k26784.fqn:null);
switch (G__26786) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26784,else__17449__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","skip","om.next/skip",-2023963650)], null),q)){
return null;
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,___$1){
return (function (p1__26780_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__26780_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__26781_SHARP_,p2__26782_SHARP_){
return cljs.core.into.call(null,p1__26781_SHARP_,p2__26782_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__26787 = self__.config;
var map__26787__$1 = ((((!((map__26787 == null)))?((((map__26787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26787):map__26787);
var ui__GT_props = cljs.core.get.call(null,map__26787__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var seq__26789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__26790 = null;
var count__26791 = (0);
var i__26792 = (0);
while(true){
if((i__26792 < count__26791)){
var c = cljs.core._nth.call(null,chunk__26790,i__26792);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_26800 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_26801 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_26800);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_26801,om.next.get_state.call(null,c)))){
if(!((next_props_26801 == null))){
om.next.update_component_BANG_.call(null,c,next_props_26801);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__26802 = seq__26789;
var G__26803 = chunk__26790;
var G__26804 = count__26791;
var G__26805 = (i__26792 + (1));
seq__26789 = G__26802;
chunk__26790 = G__26803;
count__26791 = G__26804;
i__26792 = G__26805;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26789);
if(temp__4425__auto__){
var seq__26789__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26789__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__26789__$1);
var G__26806 = cljs.core.chunk_rest.call(null,seq__26789__$1);
var G__26807 = c__17635__auto__;
var G__26808 = cljs.core.count.call(null,c__17635__auto__);
var G__26809 = (0);
seq__26789 = G__26806;
chunk__26790 = G__26807;
count__26791 = G__26808;
i__26792 = G__26809;
continue;
} else {
var c = cljs.core.first.call(null,seq__26789__$1);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_26810 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_props_26811 = om.next.computed.call(null,ui__GT_props.call(null,env,c),computed_26810);
if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_26811,om.next.get_state.call(null,c)))){
if(!((next_props_26811 == null))){
om.next.update_component_BANG_.call(null,c,next_props_26811);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__26812 = cljs.core.next.call(null,seq__26789__$1);
var G__26813 = null;
var G__26814 = (0);
var G__26815 = (0);
seq__26789 = G__26812;
chunk__26790 = G__26813;
count__26791 = G__26814;
i__26792 = G__26815;
continue;
}
} else {
return null;
}
}
break;
}

}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712)], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__16820__auto__;
}
})())){
var new_state_26816 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_26817 = cljs.core.meta.call(null,new_state_26816);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_26816,refs_26817));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_26793 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_26794 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26795 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__4425__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__4425__auto__)){
var c_SINGLEQUOTE_ = temp__4425__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26795;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26794;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26793;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__16832__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"sel","sel",-45623280,null)))))].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__16832__auto__ = target;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__26779_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__26779_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__16832__auto__ = target;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

return om.next.schedule_render_BANG_.call(null,this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__4425__auto___26818 = om.next.get_query.call(null,(function (){var or__16832__auto__ = (function (){var and__16820__auto__ = target;
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4425__auto___26818)){
var sel_26819 = temp__4425__auto___26818;
var env_26820 = om.next.to_env.call(null,self__.config);
var snds_26821 = om.next.gather_sends.call(null,env_26820,sel_26819,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_26821)){
} else {
var temp__4425__auto___26822__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto___26822__$1)){
var send_26823 = temp__4425__auto___26822__$1;
send_26823.call(null,snds_26821,((function (send_26823,temp__4425__auto___26822__$1,env_26820,snds_26821,sel_26819,temp__4425__auto___26818,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_26820,sel_26819));
});})(send_26823,temp__4425__auto___26822__$1,env_26820,snds_26821,sel_26819,temp__4425__auto___26818,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
return om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return remove.call(null);
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#om.next.Reconciler{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26783){
var self__ = this;
var G__26783__$1 = this;
return (new cljs.core.RecordIter((0),G__26783__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
var self__ = this;
var this__17441__auto____$1 = this;
var h__17267__auto__ = self__.__hash;
if(!((h__17267__auto__ == null))){
return h__17267__auto__;
} else {
var h__17267__auto____$1 = cljs.core.hash_imap.call(null,this__17441__auto____$1);
self__.__hash = h__17267__auto____$1;

return h__17267__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
var self__ = this;
var this__17442__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16820__auto__ = other__17443__auto__;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = (this__17442__auto____$1.constructor === other__17443__auto__.constructor);
if(and__16820__auto____$1){
return cljs.core.equiv_map.call(null,this__17442__auto____$1,other__17443__auto__);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__26783){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__26796 = cljs.core.keyword_identical_QMARK_;
var expr__26797 = k__17454__auto__;
if(cljs.core.truth_(pred__26796.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__26797))){
return (new om.next.Reconciler(G__26783,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26796.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__26797))){
return (new om.next.Reconciler(self__.config,G__26783,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__26783),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__26783){
var self__ = this;
var this__17445__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__26783,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__26785){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__26785),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__26785),null,cljs.core.dissoc.call(null,G__26785,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__26824,c){
var map__26830 = p__26824;
var map__26830__$1 = ((((!((map__26830 == null)))?((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var env = map__26830__$1;
var parser = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__16820__auto__ = pathopt;
if(and__16820__auto__){
var and__16820__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__16820__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__4425__auto___26835 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto___26835)){
var l_26836 = temp__4425__auto___26835;
var dt_26837 = (e - s);
if(((16) < dt_26837)){
goog.log.warning(l_26836,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_26837),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args26838 = [];
var len__17890__auto___26861 = arguments.length;
var i__17891__auto___26862 = (0);
while(true){
if((i__17891__auto___26862 < len__17890__auto___26861)){
args26838.push((arguments[i__17891__auto___26862]));

var G__26863 = (i__17891__auto___26862 + (1));
i__17891__auto___26862 = G__26863;
continue;
} else {
}
break;
}

var G__26840 = args26838.length;
switch (G__26840) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26838.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__26851){
var vec__26853 = p__26851;
var table = cljs.core.nth.call(null,vec__26853,(0),null);
var id = cljs.core.nth.call(null,vec__26853,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__26854){
var vec__26858 = p__26854;
var old = cljs.core.nth.call(null,vec__26858,(0),null);
var vec__26859 = cljs.core.nth.call(null,vec__26858,(1),null);
var _ = cljs.core.nth.call(null,vec__26859,(0),null);
var id = cljs.core.nth.call(null,vec__26859,(1),null);
var new$ = vec__26859;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__26860 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
var G__26860__$1 = ((!((id_key == null)))?cljs.core.assoc.call(null,G__26860,id_key,id):G__26860);
return G__26860__$1;
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;
om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__26865_SHARP_){
return cljs.core.update_in.call(null,p1__26865_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__26866_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__26866_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var k__$1 = (function (){var G__26876 = k;
var G__26876__$1 = ((om.next.unique_ident_QMARK_.call(null,k))?cljs.core.first.call(null,G__26876):G__26876);
return G__26876__$1;
})();
return k__$1;
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.next.union_QMARK_.call(null,expr)){
var jk = om.next.join_key.call(null,expr);
var jv = om.next.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__26877 = cljs.core.next.call(null,exprs);
var G__26878 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__26877;
ret__$1 = G__26878;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__26867_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__26867_SHARP_))),p1__26867_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__26879 = cljs.core.next.call(null,exprs);
var G__26880 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__26879;
ret__$1 = G__26880;
continue;
}
} else {
if(cljs.core.truth_(om.next.join_QMARK_.call(null,expr))){
var jk = om.next.join_key.call(null,expr);
var jv = om.next.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__26881 = cljs.core.next.call(null,exprs);
var G__26882 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__26881;
ret__$1 = G__26882;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__26868_SHARP_){
return cljs.core.update_in.call(null,p1__26868_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__16832__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__26883 = cljs.core.next.call(null,exprs);
var G__26884 = null;
exprs = G__26883;
ret__$1 = G__26884;
continue;
} else {
var G__26885 = cljs.core.next.call(null,exprs);
var G__26886 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__26885;
ret__$1 = G__26886;
continue;

}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__26892){
var map__26899 = p__26892;
var map__26899__$1 = ((((!((map__26899 == null)))?((((map__26899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26899):map__26899);
var config = map__26899__$1;
var root_render = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__26899,map__26899__$1,config){
return (function (p1__26889_SHARP_,p2__26890_SHARP_){
return ReactDOM.render(p1__26889_SHARP_,p2__26890_SHARP_);
});})(map__26899,map__26899__$1,config))
);
var normalize = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__26887_SHARP_,p2__26888_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__26887_SHARP_,p2__26888_SHARP_);
});})(map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var history = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__26891_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__26891_SHARP_);
});})(map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"config","config",-1659574354,null))))].join('')));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431)],[pathopt,id_key,(function (){var G__26902 = instrument;
var G__26902__$1 = ((!((instrument == null)))?((function (G__26902,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize){
return (function om$next$reconciler_$_G__26902(x){
var _STAR_instrument_STAR_26904 = om.next._STAR_instrument_STAR_;
om.next._STAR_instrument_STAR_ = null;

try{return instrument.call(null,x);
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26904;
}});})(G__26902,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__26899,map__26899__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize))
:G__26902);
return G__26902__$1;
})(),merge_ident,merge_sends,remotes,migrate,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__16832__auto__ = !(norm_QMARK_);
if(or__16832__auto__){
return or__16832__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"reconciler?","reconciler?",250756342,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null))))].join('')));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args26905 = [];
var len__17890__auto___26908 = arguments.length;
var i__17891__auto___26909 = (0);
while(true){
if((i__17891__auto___26909 < len__17890__auto___26908)){
args26905.push((arguments[i__17891__auto___26909]));

var G__26910 = (i__17891__auto___26909 + (1));
i__17891__auto___26909 = G__26910;
continue;
} else {
}
break;
}

var G__26907 = args26905.length;
switch (G__26907) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26905.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args26912 = [];
var len__17890__auto___26915 = arguments.length;
var i__17891__auto___26916 = (0);
while(true){
if((i__17891__auto___26916 < len__17890__auto___26915)){
args26912.push((arguments[i__17891__auto___26916]));

var G__26917 = (i__17891__auto___26916 + (1));
i__17891__auto___26916 = G__26917;
continue;
} else {
}
break;
}

var G__26914 = args26912.length;
switch (G__26914) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26912.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args26919 = [];
var len__17890__auto___26922 = arguments.length;
var i__17891__auto___26923 = (0);
while(true){
if((i__17891__auto___26923 < len__17890__auto___26922)){
args26919.push((arguments[i__17891__auto___26923]));

var G__26924 = (i__17891__auto___26923 + (1));
i__17891__auto___26923 = G__26924;
continue;
} else {
}
break;
}

var G__26921 = args26919.length;
switch (G__26921) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26919.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args26926 = [];
var len__17890__auto___26929 = arguments.length;
var i__17891__auto___26930 = (0);
while(true){
if((i__17891__auto___26930 < len__17890__auto___26929)){
args26926.push((arguments[i__17891__auto___26930]));

var G__26931 = (i__17891__auto___26930 + (1));
i__17891__auto___26930 = G__26931;
continue;
} else {
}
break;
}

var G__26928 = args26926.length;
switch (G__26928) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26926.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,expr),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=next.js.map