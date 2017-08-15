// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27685 = arguments.length;
var i__17891__auto___27686 = (0);
while(true){
if((i__17891__auto___27686 < len__17890__auto___27685)){
args__17897__auto__.push((arguments[i__17891__auto___27686]));

var G__27687 = (i__17891__auto___27686 + (1));
i__17891__auto___27686 = G__27687;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq27684){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27684));
});
cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27689 = arguments.length;
var i__17891__auto___27690 = (0);
while(true){
if((i__17891__auto___27690 < len__17890__auto___27689)){
args__17897__auto__.push((arguments[i__17891__auto___27690]));

var G__27691 = (i__17891__auto___27690 + (1));
i__17891__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq27688){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27688));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__27695 = cljs.core._EQ_;
var expr__27696 = c;
if(cljs.core.truth_(pred__27695.call(null,"\b",expr__27696))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\t",expr__27696))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\n",expr__27696))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\f",expr__27696))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\r",expr__27696))){
return "\\return";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\"",expr__27696))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__27695.call(null,"\\",expr__27696))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27699 = arguments.length;
var i__17891__auto___27700 = (0);
while(true){
if((i__17891__auto___27700 < len__17890__auto___27699)){
args__17897__auto__.push((arguments[i__17891__auto___27700]));

var G__27701 = (i__17891__auto___27700 + (1));
i__17891__auto___27700 = G__27701;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq27698){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27698));
});
cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27703 = arguments.length;
var i__17891__auto___27704 = (0);
while(true){
if((i__17891__auto___27704 < len__17890__auto___27703)){
args__17897__auto__.push((arguments[i__17891__auto___27704]));

var G__27705 = (i__17891__auto___27704 + (1));
i__17891__auto___27704 = G__27705;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq27702){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27702));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__27707 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__27707,(0),null);
var new_context = cljs.core.nth.call(null,vec__27707,(1),null);
var G__27708 = new_context;
var G__27709 = remainder;
var G__27710 = cljs.core.conj.call(null,acc,result);
context = G__27708;
lis__$1 = G__27709;
acc = G__27710;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27712 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__27712,(0),null);
var new_context = cljs.core.nth.call(null,vec__27712,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__27713 = new_context;
var G__27714 = cljs.core.conj.call(null,acc,result);
context = G__27713;
acc = G__27714;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27716 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__27716,(0),null);
var continue$ = cljs.core.nth.call(null,vec__27716,(1),null);
var new_context = cljs.core.nth.call(null,vec__27716,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__27717 = new_context;
var G__27718 = cljs.core.conj.call(null,acc,result);
context = G__27717;
acc = G__27718;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17604__auto__ = (function cljs$pprint$unzip_map_$_iter__27743(s__27744){
return (new cljs.core.LazySeq(null,(function (){
var s__27744__$1 = s__27744;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27744__$1);
if(temp__4425__auto__){
var s__27744__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27744__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__27744__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__27746 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__27745 = (0);
while(true){
if((i__27745 < size__17603__auto__)){
var vec__27751 = cljs.core._nth.call(null,c__17602__auto__,i__27745);
var k = cljs.core.nth.call(null,vec__27751,(0),null);
var vec__27752 = cljs.core.nth.call(null,vec__27751,(1),null);
var v1 = cljs.core.nth.call(null,vec__27752,(0),null);
var v2 = cljs.core.nth.call(null,vec__27752,(1),null);
cljs.core.chunk_append.call(null,b__27746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__27767 = (i__27745 + (1));
i__27745 = G__27767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),cljs$pprint$unzip_map_$_iter__27743.call(null,cljs.core.chunk_rest.call(null,s__27744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27746),null);
}
} else {
var vec__27753 = cljs.core.first.call(null,s__27744__$2);
var k = cljs.core.nth.call(null,vec__27753,(0),null);
var vec__27754 = cljs.core.nth.call(null,vec__27753,(1),null);
var v1 = cljs.core.nth.call(null,vec__27754,(0),null);
var v2 = cljs.core.nth.call(null,vec__27754,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27743.call(null,cljs.core.rest.call(null,s__27744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17604__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17604__auto__ = (function cljs$pprint$unzip_map_$_iter__27755(s__27756){
return (new cljs.core.LazySeq(null,(function (){
var s__27756__$1 = s__27756;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27756__$1);
if(temp__4425__auto__){
var s__27756__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27756__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__27756__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__27758 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__27757 = (0);
while(true){
if((i__27757 < size__17603__auto__)){
var vec__27763 = cljs.core._nth.call(null,c__17602__auto__,i__27757);
var k = cljs.core.nth.call(null,vec__27763,(0),null);
var vec__27764 = cljs.core.nth.call(null,vec__27763,(1),null);
var v1 = cljs.core.nth.call(null,vec__27764,(0),null);
var v2 = cljs.core.nth.call(null,vec__27764,(1),null);
cljs.core.chunk_append.call(null,b__27758,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__27768 = (i__27757 + (1));
i__27757 = G__27768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27758),cljs$pprint$unzip_map_$_iter__27755.call(null,cljs.core.chunk_rest.call(null,s__27756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27758),null);
}
} else {
var vec__27765 = cljs.core.first.call(null,s__27756__$2);
var k = cljs.core.nth.call(null,vec__27765,(0),null);
var vec__27766 = cljs.core.nth.call(null,vec__27765,(1),null);
var v1 = cljs.core.nth.call(null,vec__27766,(0),null);
var v2 = cljs.core.nth.call(null,vec__27766,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27755.call(null,cljs.core.rest.call(null,s__27756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17604__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17604__auto__ = (function cljs$pprint$tuple_map_$_iter__27777(s__27778){
return (new cljs.core.LazySeq(null,(function (){
var s__27778__$1 = s__27778;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27778__$1);
if(temp__4425__auto__){
var s__27778__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27778__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__27778__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__27780 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__27779 = (0);
while(true){
if((i__27779 < size__17603__auto__)){
var vec__27783 = cljs.core._nth.call(null,c__17602__auto__,i__27779);
var k = cljs.core.nth.call(null,vec__27783,(0),null);
var v = cljs.core.nth.call(null,vec__27783,(1),null);
cljs.core.chunk_append.call(null,b__27780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__27785 = (i__27779 + (1));
i__27779 = G__27785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27780),cljs$pprint$tuple_map_$_iter__27777.call(null,cljs.core.chunk_rest.call(null,s__27778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27780),null);
}
} else {
var vec__27784 = cljs.core.first.call(null,s__27778__$2);
var k = cljs.core.nth.call(null,vec__27784,(0),null);
var v = cljs.core.nth.call(null,vec__27784,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27777.call(null,cljs.core.rest.call(null,s__27778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17604__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__27786 = (n - (1));
n = G__27786;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__27787 = (n + (1));
n = G__27787;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__27788 = (pos + (1));
pos = G__27788;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__17487__auto__ = (((pp == null))?null:pp);
var m__17488__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,pp);
} else {
var m__17488__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args27790 = [];
var len__17890__auto___27799 = arguments.length;
var i__17891__auto___27800 = (0);
while(true){
if((i__17891__auto___27800 < len__17890__auto___27799)){
args27790.push((arguments[i__17891__auto___27800]));

var G__27801 = (i__17891__auto___27800 + (1));
i__17891__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var G__27792 = args27790.length;
switch (G__27792) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27790.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint27793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27793 = (function (writer,max_columns,fields,meta27794){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27794 = meta27794;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint27793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_27795,meta27794__$1){
var self__ = this;
var _27795__$1 = this;
return (new cljs.pprint.t_cljs$pprint27793(self__.writer,self__.max_columns,self__.fields,meta27794__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_27795){
var self__ = this;
var _27795__$1 = this;
return self__.meta27794;
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27796 = cljs.core._EQ_;
var expr__27797 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__27796.call(null,String,expr__27797))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__27796,expr__27797,this$__$1,fields){
return (function (p1__27789_SHARP_){
return cljs.core._EQ_.call(null,p1__27789_SHARP_,"\n");
});})(s,nl,pred__27796,expr__27797,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__27796.call(null,Number,expr__27797))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27797)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27794","meta27794",-1424219801,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint27793.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27793.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27793";

cljs.pprint.t_cljs$pprint27793.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint27793");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint27793 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint27793(writer__$1,max_columns__$1,fields__$1,meta27794){
return (new cljs.pprint.t_cljs$pprint27793(writer__$1,max_columns__$1,fields__$1,meta27794));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint27793(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;
cljs.pprint.get_miser_width;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27804,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27806 = (((k27804 instanceof cljs.core.Keyword))?k27804.fqn:null);
switch (G__27806) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27804,else__17449__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.logical-block{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27803){
var self__ = this;
var G__27803__$1 = this;
return (new cljs.core.RecordIter((0),G__27803__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27803){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27807 = cljs.core.keyword_identical_QMARK_;
var expr__27808 = k__17454__auto__;
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__27808))){
return (new cljs.pprint.logical_block(G__27803,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,G__27803,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27803,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27803,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27803,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27803,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27803,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27803,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27803,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27807.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__27808))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27803,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27803),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27803){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27803,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27805){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__27805),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__27805),null,cljs.core.dissoc.call(null,G__27805,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__27811 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__27811;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27813,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27815 = (((k27813 instanceof cljs.core.Keyword))?k27813.fqn:null);
switch (G__27815) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27813,else__17449__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27812){
var self__ = this;
var G__27812__$1 = this;
return (new cljs.core.RecordIter((0),G__27812__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27812){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27816 = cljs.core.keyword_identical_QMARK_;
var expr__27817 = k__17454__auto__;
if(cljs.core.truth_(pred__27816.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27817))){
return (new cljs.pprint.buffer_blob(G__27812,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27816.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27817))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27812,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27816.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__27817))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27812,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27816.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27817))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27812,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27816.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27817))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27812,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27812),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27812){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27812,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27814){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27814),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27814),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__27814),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27814),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27814),null,cljs.core.dissoc.call(null,G__27814,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__26967__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26967__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27821,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27823 = (((k27821 instanceof cljs.core.Keyword))?k27821.fqn:null);
switch (G__27823) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27821,else__17449__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.nl-t{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27820){
var self__ = this;
var G__27820__$1 = this;
return (new cljs.core.RecordIter((0),G__27820__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27820){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27824 = cljs.core.keyword_identical_QMARK_;
var expr__27825 = k__17454__auto__;
if(cljs.core.truth_(pred__27824.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27825))){
return (new cljs.pprint.nl_t(G__27820,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27824.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__27825))){
return (new cljs.pprint.nl_t(self__.type_tag,G__27820,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27824.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27825))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27820,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27824.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27825))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27820,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27824.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27825))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27820,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27820),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27820){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27820,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27822){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27822),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27822),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27822),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27822),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27822),null,cljs.core.dissoc.call(null,G__27822,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__26967__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26967__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27829,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27831 = (((k27829 instanceof cljs.core.Keyword))?k27829.fqn:null);
switch (G__27831) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27829,else__17449__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27828){
var self__ = this;
var G__27828__$1 = this;
return (new cljs.core.RecordIter((0),G__27828__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27828){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27832 = cljs.core.keyword_identical_QMARK_;
var expr__27833 = k__17454__auto__;
if(cljs.core.truth_(pred__27832.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27833))){
return (new cljs.pprint.start_block_t(G__27828,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27832.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27833))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27828,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27832.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27833))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27828,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27832.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27833))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27828,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27828),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27828){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27828,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27830){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27830),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27830),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27830),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27830),null,cljs.core.dissoc.call(null,G__27830,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__26967__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26967__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27837,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27839 = (((k27837 instanceof cljs.core.Keyword))?k27837.fqn:null);
switch (G__27839) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27837,else__17449__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27836){
var self__ = this;
var G__27836__$1 = this;
return (new cljs.core.RecordIter((0),G__27836__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27836){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27840 = cljs.core.keyword_identical_QMARK_;
var expr__27841 = k__17454__auto__;
if(cljs.core.truth_(pred__27840.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27841))){
return (new cljs.pprint.end_block_t(G__27836,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27840.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27841))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27836,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27840.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27841))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27836,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27840.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27841))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27836,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27836),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27836){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27836,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27838){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27838),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27838),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27838),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27838),null,cljs.core.dissoc.call(null,G__27838,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__26967__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26967__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k27845,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__27847 = (((k27845 instanceof cljs.core.Keyword))?k27845.fqn:null);
switch (G__27847) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27845,else__17449__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.indent-t{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27844){
var self__ = this;
var G__27844__$1 = this;
return (new cljs.core.RecordIter((0),G__27844__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__27844){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__27848 = cljs.core.keyword_identical_QMARK_;
var expr__27849 = k__17454__auto__;
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27849))){
return (new cljs.pprint.indent_t(G__27844,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27849))){
return (new cljs.pprint.indent_t(self__.type_tag,G__27844,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__27849))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27844,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__27849))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27844,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27849))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27844,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27848.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27849))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27844,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__27844),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__27844){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27844,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27846){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27846),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27846),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__27846),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__27846),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27846),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27846),null,cljs.core.dissoc.call(null,G__27846,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__26967__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__26967__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
cljs.pprint.emit_nl;
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__){
return (function (p1__27853_SHARP_,p2__27852_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__27852_SHARP_);
});})(method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4425__auto___27854 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4425__auto___27854)){
var cb_27855 = temp__4425__auto___27854;
cb_27855.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4425__auto___27856 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4425__auto___27856)){
var prefix_27857 = temp__4425__auto___27856;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_27857);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4425__auto___27858 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4425__auto___27858)){
var cb_27859 = temp__4425__auto___27858;
cb_27859.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4425__auto__)){
var suffix = temp__4425__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27860 = cljs.core._EQ_;
var expr__27861 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__27860.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__27861))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__27860.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__27861))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27861)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__16832__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__16820__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__16820__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4423__auto___27863 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___27863)){
var tws_27864 = temp__4423__auto___27863;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_27864);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27869 = cljs.core.seq.call(null,tokens);
var chunk__27870 = null;
var count__27871 = (0);
var i__27872 = (0);
while(true){
if((i__27872 < count__27871)){
var token = cljs.core._nth.call(null,chunk__27870,i__27872);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4423__auto___27873 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___27873)){
var tws_27874 = temp__4423__auto___27873;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_27874);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_27875 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__16820__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__16820__auto__)){
return tws_27875;
} else {
return and__16820__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_27875);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__27876 = seq__27869;
var G__27877 = chunk__27870;
var G__27878 = count__27871;
var G__27879 = (i__27872 + (1));
seq__27869 = G__27876;
chunk__27870 = G__27877;
count__27871 = G__27878;
i__27872 = G__27879;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27869);
if(temp__4425__auto__){
var seq__27869__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27869__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__27869__$1);
var G__27880 = cljs.core.chunk_rest.call(null,seq__27869__$1);
var G__27881 = c__17635__auto__;
var G__27882 = cljs.core.count.call(null,c__17635__auto__);
var G__27883 = (0);
seq__27869 = G__27880;
chunk__27870 = G__27881;
count__27871 = G__27882;
i__27872 = G__27883;
continue;
} else {
var token = cljs.core.first.call(null,seq__27869__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4423__auto___27884 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto___27884)){
var tws_27885 = temp__4423__auto___27884;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_27885);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_27886 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__16820__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__16820__auto__)){
return tws_27886;
} else {
return and__16820__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_27886);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__27887 = cljs.core.next.call(null,seq__27869__$1);
var G__27888 = null;
var G__27889 = (0);
var G__27890 = (0);
seq__27869 = G__27887;
chunk__27870 = G__27888;
count__27871 = G__27889;
i__27872 = G__27890;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__16832__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__16820__auto__ = miser_width;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = maxcol;
if(cljs.core.truth_(and__16820__auto____$1)){
var and__16820__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__16820__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__16820__auto____$2;
}
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__16832__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__16832__auto____$1){
return or__16832__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__27891_SHARP_){
return cljs.core.not.call(null,(function (){var and__16820__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__27891_SHARP_);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__27891_SHARP_),lb);
} else {
return and__16820__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__27892_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__27892_SHARP_);
return cljs.core.not.call(null,(function (){var and__16820__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__27892_SHARP_);
if(cljs.core.truth_(and__16820__auto__)){
var or__16832__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__16832__auto__){
return or__16832__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__16820__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__27893 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__27893;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_27894 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_27894);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__27895_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__27895_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__27898 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__27898,(0),null);
var b = cljs.core.nth.call(null,vec__27898,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__27899 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__27899,(0),null);
var remainder = cljs.core.nth.call(null,vec__27899,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__27900 = new_buffer;
buffer = G__27900;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4423__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4423__auto__)){
var buf = temp__4423__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4425__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4425__auto__)){
var tws = temp__4425__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_27909 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_27910 = (oldpos_27909 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_27910);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_27909,newpos_27910));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__27905_27911 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__27906_27912 = null;
var count__27907_27913 = (0);
var i__27908_27914 = (0);
while(true){
if((i__27908_27914 < count__27907_27913)){
var l_27915__$1 = cljs.core._nth.call(null,chunk__27906_27912,i__27908_27914);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_27915__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__27916 = seq__27905_27911;
var G__27917 = chunk__27906_27912;
var G__27918 = count__27907_27913;
var G__27919 = (i__27908_27914 + (1));
seq__27905_27911 = G__27916;
chunk__27906_27912 = G__27917;
count__27907_27913 = G__27918;
i__27908_27914 = G__27919;
continue;
} else {
var temp__4425__auto___27920 = cljs.core.seq.call(null,seq__27905_27911);
if(temp__4425__auto___27920){
var seq__27905_27921__$1 = temp__4425__auto___27920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27905_27921__$1)){
var c__17635__auto___27922 = cljs.core.chunk_first.call(null,seq__27905_27921__$1);
var G__27923 = cljs.core.chunk_rest.call(null,seq__27905_27921__$1);
var G__27924 = c__17635__auto___27922;
var G__27925 = cljs.core.count.call(null,c__17635__auto___27922);
var G__27926 = (0);
seq__27905_27911 = G__27923;
chunk__27906_27912 = G__27924;
count__27907_27913 = G__27925;
i__27908_27914 = G__27926;
continue;
} else {
var l_27927__$1 = cljs.core.first.call(null,seq__27905_27921__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_27927__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__27928 = cljs.core.next.call(null,seq__27905_27921__$1);
var G__27929 = null;
var G__27930 = (0);
var G__27931 = (0);
seq__27905_27911 = G__27928;
chunk__27906_27912 = G__27929;
count__27907_27913 = G__27930;
i__27908_27914 = G__27931;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint27938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27938 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta27939){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta27939 = meta27939;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint27938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_27940,meta27939__$1){
var self__ = this;
var _27940__$1 = this;
return (new cljs.pprint.t_cljs$pprint27938(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta27939__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_27940){
var self__ = this;
var _27940__$1 = this;
return self__.meta27939;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27941 = cljs.core._EQ_;
var expr__27942 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__27941.call(null,String,expr__27942))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__27941.call(null,Number,expr__27942))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27942)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t_cljs$pprint27938.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pretty-writer","pretty-writer",417697260,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null)], null)))], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27939","meta27939",-1901148023,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint27938.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint27938.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27938";

cljs.pprint.t_cljs$pprint27938.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint27938");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint27938 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint27938(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27939){
return (new cljs.pprint.t_cljs$pprint27938(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta27939));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint27938(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__4425__auto___27944 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4425__auto___27944)){
var cb_27945 = temp__4425__auto___27944;
cb_27945.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4425__auto___27946 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4425__auto___27946)){
var cb_27947 = temp__4425__auto___27946;
cb_27947.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_27948 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_27949 = (oldpos_27948 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_27949);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_27948,newpos_27949));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__27953 = cljs.core._EQ_;
var expr__27954 = relative_to;
if(cljs.core.truth_(pred__27953.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__27954))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__27953.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__27954))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27954)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.format_simple_number;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"right-margin","right-margin",-810413306),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956),new cljs.core.Keyword(null,"radix","radix",857016463),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"readably","readably",1129599760),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),new cljs.core.Keyword(null,"base","base",185279322)],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",1206624211,null),"resources\\public\\js\\cljs\\pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",-437272454,null),"resources\\public\\js\\cljs\\pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",1606185849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",1148404994,null),"resources\\public\\js\\cljs\\pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",534683484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",75920659,null),"resources\\public\\js\\cljs\\pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",1649488204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",1795828355,null),"resources\\public\\js\\cljs\\pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",1558253641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",1168517744,null),"resources\\public\\js\\cljs\\pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},new cljs.core.Symbol("cljs.core","*print-level*","cljs.core/*print-level*",65848482,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),"cljs/core.cljs",(16),(1),true,(114),(125),cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},new cljs.core.Symbol("cljs.core","*print-readably*","cljs.core/*print-readably*",-354670250,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),"cljs/core.cljs",(19),(1),true,(81),(87),cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",-1709114492,null),"resources\\public\\js\\cljs\\pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),"cljs/core.cljs",(17),(1),true,(105),(112),cljs.core.List.EMPTY,"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",-762636861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",726795140,null),"resources\\public\\js\\cljs\\pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",1887526790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-base*","*print-base*",2037937791,null),"resources\\public\\js\\cljs\\pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__27956_SHARP_){
var temp__4425__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__27956_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__27956_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__16820__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__16820__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__16820__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__16820__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__16820__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27977 = arguments.length;
var i__17891__auto___27978 = (0);
while(true){
if((i__17891__auto___27978 < len__17890__auto___27977)){
args__17897__auto__.push((arguments[i__17891__auto___27978]));

var G__27979 = (i__17891__auto___27978 + (1));
i__17891__auto___27978 = G__27979;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((1) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((1)),(0))):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17898__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_27963 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_27964 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_27965 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_27966 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_27967 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_27968 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_27969 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_27970 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_27971 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_27972 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_27973 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_27974 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__26950__auto___27980 = base_writer;
var new_writer__26951__auto___27981 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__26950__auto___27980));
var _STAR_out_STAR_27975_27982 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__26951__auto___27981)?cljs.pprint.make_pretty_writer.call(null,base_writer__26950__auto___27980,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26950__auto___27980);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27975_27982;
}} else {
var _STAR_out_STAR_27976_27983 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27976_27983;
}}

if(optval === true){
cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_27974;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_27973;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_27972;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_27971;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27970;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_27969;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_27968;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_27967;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27966;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_27965;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_27964;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_27963;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq27961){
var G__27962 = cljs.core.first.call(null,seq27961);
var seq27961__$1 = cljs.core.next.call(null,seq27961);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__27962,seq27961__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args27984 = [];
var len__17890__auto___27990 = arguments.length;
var i__17891__auto___27991 = (0);
while(true){
if((i__17891__auto___27991 < len__17890__auto___27990)){
args27984.push((arguments[i__17891__auto___27991]));

var G__27992 = (i__17891__auto___27991 + (1));
i__17891__auto___27991 = G__27992;
continue;
} else {
}
break;
}

var G__27986 = args27984.length;
switch (G__27986) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27984.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_27987 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27987;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__26950__auto__ = writer;
var new_writer__26951__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__26950__auto__));
var _STAR_out_STAR_27988 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__26951__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__26950__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__26950__auto__);

try{var _STAR_print_pretty_STAR_27989_27994 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_27989_27994;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_27988;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__16820__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__16820__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__16820__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
cljs.pprint.compile_format;
cljs.pprint.execute_format;
cljs.pprint.init_navigator;
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__17897__auto__ = [];
var len__17890__auto___27998 = arguments.length;
var i__17891__auto___27999 = (0);
while(true){
if((i__17891__auto___27999 < len__17890__auto___27998)){
args__17897__auto__.push((arguments[i__17891__auto___27999]));

var G__28000 = (i__17891__auto___27999 + (1));
i__17891__auto___27999 = G__28000;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((2) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((2)),(0))):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17898__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq27995){
var G__27996 = cljs.core.first.call(null,seq27995);
var seq27995__$1 = cljs.core.next.call(null,seq27995);
var G__27997 = cljs.core.first.call(null,seq27995__$1);
var seq27995__$2 = cljs.core.next.call(null,seq27995__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__27996,G__27997,seq27995__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k28002,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__28004 = (((k28002 instanceof cljs.core.Keyword))?k28002.fqn:null);
switch (G__28004) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28002,else__17449__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28001){
var self__ = this;
var G__28001__$1 = this;
return (new cljs.core.RecordIter((0),G__28001__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__28001){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__28005 = cljs.core.keyword_identical_QMARK_;
var expr__28006 = k__17454__auto__;
if(cljs.core.truth_(pred__28005.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28006))){
return (new cljs.pprint.arg_navigator(G__28001,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28005.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__28006))){
return (new cljs.pprint.arg_navigator(self__.seq,G__28001,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28005.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__28006))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__28001,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__28001),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__28001){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__28001,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__28003){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28003),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__28003),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__28003),null,cljs.core.dissoc.call(null,G__28003,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__28010 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__28010,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28010,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.relative_reposition;
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k28012,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__28014 = (((k28012 instanceof cljs.core.Keyword))?k28012.fqn:null);
switch (G__28014) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28012,else__17449__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28011){
var self__ = this;
var G__28011__$1 = this;
return (new cljs.core.RecordIter((0),G__28011__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__28011){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__28015 = cljs.core.keyword_identical_QMARK_;
var expr__28016 = k__17454__auto__;
if(cljs.core.truth_(pred__28015.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__28016))){
return (new cljs.pprint.compiled_directive(G__28011,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28015.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__28016))){
return (new cljs.pprint.compiled_directive(self__.func,G__28011,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28015.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__28016))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__28011,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28015.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__28016))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__28011,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__28011),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__28011){
var self__ = this;
var this__17445__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__28011,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__28013){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28013),null,cljs.core.dissoc.call(null,G__28013,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__28019,navigator){
var vec__28023 = p__28019;
var param = cljs.core.nth.call(null,vec__28023,(0),null);
var vec__28024 = cljs.core.nth.call(null,vec__28023,(1),null);
var raw_val = cljs.core.nth.call(null,vec__28024,(0),null);
var offset = cljs.core.nth.call(null,vec__28024,(1),null);
var vec__28025 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__28025,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__28025,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__28027 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__28027,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__28027,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.opt_base_str;
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__16832__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__28029 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__28029,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__28029,(1),null);
var base_output = (function (){var or__16832__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str(chars),cljs.core.str(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str(base_output),cljs.core.str(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__28030_SHARP_){
if((p1__28030_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__28030_SHARP_,base),cljs.core.quot.call(null,p1__28030_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__28031_SHARP_){
if((p1__28031_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__28031_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__28031_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__28034 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__28034,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__28034,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_28035 = (arg < (0));
var pos_arg_28036 = ((neg_28035)?(- arg):arg);
var raw_str_28037 = cljs.pprint.opt_base_str.call(null,base,pos_arg_28036);
var group_str_28038 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_28035,pos_arg_28036,raw_str_28037,vec__28034,arg,arg_navigator__$1){
return (function (p1__28032_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__28032_SHARP_);
});})(neg_28035,pos_arg_28036,raw_str_28037,vec__28034,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_28037));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_28037);
var signed_str_28039 = ((neg_28035)?[cljs.core.str("-"),cljs.core.str(group_str_28038)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_28038)].join(''):group_str_28038
));
var padded_str_28040 = (((signed_str_28039.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_28039.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_28039)].join(''):signed_str_28039);
cljs.pprint.print.call(null,padded_str_28040);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__28041 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__28042 = (pos - (1));
var G__28043 = cljs.core.first.call(null,remainder);
var G__28044 = cljs.core.next.call(null,remainder);
acc = G__28041;
pos = G__28042;
this$ = G__28043;
remainder = G__28044;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__28046 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28046,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28046,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_28047 = (((arg < (0)))?(- arg):arg);
var parts_28048 = cljs.pprint.remainders.call(null,(1000),abs_arg_28047);
if((cljs.core.count.call(null,parts_28048) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_28049 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_28048);
var full_str_28050 = cljs.pprint.add_english_scales.call(null,parts_strs_28049,(0));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_28050)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28052 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28052,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28052,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_28053 = (((arg < (0)))?(- arg):arg);
var parts_28054 = cljs.pprint.remainders.call(null,(1000),abs_arg_28053);
if((cljs.core.count.call(null,parts_28054) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_28055 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_28054));
var head_str_28056 = cljs.pprint.add_english_scales.call(null,parts_strs_28055,(1));
var tail_str_28057 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_28054));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,head_str_28056))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_28057))))?[cljs.core.str(head_str_28056),cljs.core.str(", "),cljs.core.str(tail_str_28057)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_28056)))?[cljs.core.str(head_str_28056),cljs.core.str("th")].join(''):tail_str_28057
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_28058 = cljs.core.rem.call(null,arg,(100));
var not_teens_28059 = (((11) < low_two_digits_28058)) || (((19) > low_two_digits_28058));
var low_digit_28060 = cljs.core.rem.call(null,low_two_digits_28058,(10));
cljs.pprint.print.call(null,((((low_digit_28060 === (1))) && (not_teens_28059))?"st":((((low_digit_28060 === (2))) && (not_teens_28059))?"nd":((((low_digit_28060 === (3))) && (not_teens_28059))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28062 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28062,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28062,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_28063 = cljs.pprint.remainders.call(null,(10),arg);
var acc_28064 = cljs.core.PersistentVector.EMPTY;
var pos_28065 = (cljs.core.count.call(null,digits_28063) - (1));
var digits_28066__$1 = digits_28063;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_28066__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_28064));
} else {
var digit_28067 = cljs.core.first.call(null,digits_28066__$1);
var G__28068 = ((cljs.core._EQ_.call(null,(0),digit_28067))?acc_28064:cljs.core.conj.call(null,acc_28064,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_28065),(digit_28067 - (1)))));
var G__28069 = (pos_28065 - (1));
var G__28070 = cljs.core.next.call(null,digits_28066__$1);
acc_28064 = G__28068;
pos_28065 = G__28069;
digits_28066__$1 = G__28070;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28072 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__28072,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28072,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28077 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__28077,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28077,(1),null);
var pred__28078_28081 = cljs.core._EQ_;
var expr__28079_28082 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__28078_28081.call(null,"o",expr__28079_28082))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__28078_28081.call(null,"u",expr__28079_28082))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__28078_28081.call(null,null,expr__28079_28082))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28079_28082)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28084 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__28084,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28084,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28087 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__28087,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__28087,(1),null);
var vec__28088 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__28088,(0),null);
var offsets = cljs.core.nth.call(null,vec__28088,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28090 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__28090,(0),null);
var e = cljs.core.nth.call(null,vec__28090,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__28091 = (i - (1));
i = G__28091;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__16832__auto__ = d;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__17163__auto__ = (2);
var y__17164__auto__ = w;
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__17163__auto__ = (e + (1));
var y__17164__auto__ = (w__$1 - (1));
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})():(w__$1 + e)
));
var vec__28093 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__28093,(0),null);
var e1 = cljs.core.nth.call(null,vec__28093,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__28093,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__28093,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28095 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__28095,(0),null);
var e1 = cljs.core.nth.call(null,vec__28095,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.call(null,m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.call(null,m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28100 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28100,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28100,(1),null);
var vec__28101 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__28101,(0),null);
var abs = cljs.core.nth.call(null,vec__28101,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__28102 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__28102,(0),null);
var exp = cljs.core.nth.call(null,vec__28102,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__16832__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__28103 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__28103,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__28103,(1),null);
var expanded = cljs.core.nth.call(null,vec__28103,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__16820__auto__ = w;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = d;
if(cljs.core.truth_(and__16820__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_28104 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_28105 = (cljs.core.truth_(add_sign)?(len_28104 + (1)):len_28104);
var prepend_zero_28106__$1 = (prepend_zero) && (!((signed_len_28105 >= w)));
var append_zero_28107__$1 = (append_zero) && (!((signed_len_28105 >= w)));
var full_len_28108 = (((prepend_zero_28106__$1) || (append_zero_28107__$1))?(signed_len_28105 + (1)):signed_len_28105);
if(cljs.core.truth_((function (){var and__16820__auto__ = (full_len_28108 > w);
if(and__16820__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16820__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_28108),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_28106__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_28107__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28115 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28115,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28115,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__28117_28121 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28118_28122 = G__28117_28121;
var mantissa_28123 = cljs.core.nth.call(null,vec__28118_28122,(0),null);
var exp_28124 = cljs.core.nth.call(null,vec__28118_28122,(1),null);
var G__28117_28125__$1 = G__28117_28121;
while(true){
var vec__28119_28126 = G__28117_28125__$1;
var mantissa_28127__$1 = cljs.core.nth.call(null,vec__28119_28126,(0),null);
var exp_28128__$1 = cljs.core.nth.call(null,vec__28119_28126,(1),null);
var w_28129 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_28130 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_28131 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_28132 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_28133 = (function (){var or__16832__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return "E";
}
})();
var add_sign_28134 = (function (){var or__16832__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_28135 = (k_28132 <= (0));
var scaled_exp_28136 = (exp_28128__$1 - (k_28132 - (1)));
var scaled_exp_str_28137 = [cljs.core.str(Math.abs(scaled_exp_28136))].join('');
var scaled_exp_str_28138__$1 = [cljs.core.str(expchar_28133),cljs.core.str((((scaled_exp_28136 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_28131)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_28131 - cljs.core.count.call(null,scaled_exp_str_28137)),"0")):null)),cljs.core.str(scaled_exp_str_28137)].join('');
var exp_width_28139 = cljs.core.count.call(null,scaled_exp_str_28138__$1);
var base_mantissa_width_28140 = cljs.core.count.call(null,mantissa_28127__$1);
var scaled_mantissa_28141 = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_28132),"0"))),cljs.core.str(mantissa_28127__$1),cljs.core.str((cljs.core.truth_(d_28130)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_28130 - (base_mantissa_width_28140 - (1))) - (((k_28132 < (0)))?(- k_28132):(0))),"0")):null))].join('');
var w_mantissa_28142 = (cljs.core.truth_(w_28129)?(w_28129 - exp_width_28139):null);
var vec__28120_28143 = cljs.pprint.round_str.call(null,scaled_mantissa_28141,(0),((cljs.core._EQ_.call(null,k_28132,(0)))?(d_28130 - (1)):(((k_28132 > (0)))?d_28130:(((k_28132 < (0)))?(d_28130 - (1)):null))),(cljs.core.truth_(w_mantissa_28142)?(w_mantissa_28142 - (cljs.core.truth_(add_sign_28134)?(1):(0))):null));
var rounded_mantissa_28144 = cljs.core.nth.call(null,vec__28120_28143,(0),null);
var __28145 = cljs.core.nth.call(null,vec__28120_28143,(1),null);
var incr_exp_28146 = cljs.core.nth.call(null,vec__28120_28143,(2),null);
var full_mantissa_28147 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_28144,k_28132);
var append_zero_28148 = (cljs.core._EQ_.call(null,k_28132,cljs.core.count.call(null,rounded_mantissa_28144))) && ((d_28130 == null));
if(cljs.core.not.call(null,incr_exp_28146)){
if(cljs.core.truth_(w_28129)){
var len_28149 = (cljs.core.count.call(null,full_mantissa_28147) + exp_width_28139);
var signed_len_28150 = (cljs.core.truth_(add_sign_28134)?(len_28149 + (1)):len_28149);
var prepend_zero_28151__$1 = (prepend_zero_28135) && (!(cljs.core._EQ_.call(null,signed_len_28150,w_28129)));
var full_len_28152 = ((prepend_zero_28151__$1)?(signed_len_28150 + (1)):signed_len_28150);
var append_zero_28153__$1 = (append_zero_28148) && ((full_len_28152 < w_28129));
if(cljs.core.truth_((function (){var and__16820__auto__ = (function (){var or__16832__auto__ = (full_len_28152 > w_28129);
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = e_28131;
if(cljs.core.truth_(and__16820__auto__)){
return ((exp_width_28139 - (2)) > e_28131);
} else {
return and__16820__auto__;
}
}
})();
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16820__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_28129,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_28129 - full_len_28152) - ((append_zero_28153__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_28134)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_28151__$1)?"0":null)),cljs.core.str(full_mantissa_28147),cljs.core.str(((append_zero_28153__$1)?"0":null)),cljs.core.str(scaled_exp_str_28138__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign_28134)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_28135)?"0":null)),cljs.core.str(full_mantissa_28147),cljs.core.str(((append_zero_28148)?"0":null)),cljs.core.str(scaled_exp_str_28138__$1)].join(''));
}
} else {
var G__28154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_28144,(exp_28128__$1 + (1))], null);
G__28117_28125__$1 = G__28154;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28157 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28157,(0),null);
var _ = cljs.core.nth.call(null,vec__28157,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__28158 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__28158,(0),null);
var exp = cljs.core.nth.call(null,vec__28158,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__17163__auto__ = cljs.core.count.call(null,mantissa);
var y__17164__auto__ = (function (){var x__17170__auto__ = n;
var y__17171__auto__ = (7);
return ((x__17170__auto__ < y__17171__auto__) ? x__17170__auto__ : y__17171__auto__);
})();
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28162 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28162,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28162,(1),null);
var vec__28163 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__28163,(0),null);
var exp = cljs.core.nth.call(null,vec__28163,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__16832__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (arg < (0));
}
})();
var vec__28164 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__28164,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__28164,(1),null);
var expanded = cljs.core.nth.call(null,vec__28164,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16820__auto__)){
return add_sign;
} else {
return and__16820__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__16820__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__16820__auto__){
return add_sign;
} else {
return and__16820__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28166 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__28166,(0),null);
var navigator = cljs.core.nth.call(null,vec__28166,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28168 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__28168,(0),null);
var navigator = cljs.core.nth.call(null,vec__28168,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28170 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__28170,(0),null);
var navigator = cljs.core.nth.call(null,vec__28170,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28173 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__28173,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28173,(1),null);
var vec__28174 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__28174,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__28174,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__16832__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = max_count;
if(cljs.core.truth_(and__16820__auto__)){
return (count >= max_count);
} else {
return and__16820__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__28175 = (count + (1));
var G__28176 = iter_result;
var G__28177 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__28175;
args__$1 = G__28176;
last_pos = G__28177;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28180 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__28180,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28180,(1),null);
var vec__28181 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__28181,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__28181,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__16832__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = max_count;
if(cljs.core.truth_(and__16820__auto__)){
return (count >= max_count);
} else {
return and__16820__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__28182 = (count + (1));
var G__28183 = cljs.core.next.call(null,arg_list__$1);
count = G__28182;
arg_list__$1 = G__28183;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28185 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__28185,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28185,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__16832__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = max_count;
if(cljs.core.truth_(and__16820__auto__)){
return (count >= max_count);
} else {
return and__16820__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__28186 = (count + (1));
var G__28187 = iter_result;
var G__28188 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__28186;
navigator__$2 = G__28187;
last_pos = G__28188;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28191 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__28191,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28191,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__16832__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__16832__auto__){
return or__16832__auto__;
} else {
var and__16820__auto__ = max_count;
if(cljs.core.truth_(and__16820__auto__)){
return (count >= max_count);
} else {
return and__16820__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28192 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__28192,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__28192,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__28193 = (count + (1));
var G__28194 = navigator__$3;
count = G__28193;
navigator__$2 = G__28194;
continue;
}
}
break;
}
});
cljs.pprint.format_logical_block;
cljs.pprint.justify_clauses;
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__28197 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_28198 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28198;
}})();
var iter_result = cljs.core.nth.call(null,vec__28197,(0),null);
var result_str = cljs.core.nth.call(null,vec__28197,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__28199 = cljs.core.next.call(null,clauses__$1);
var G__28200 = cljs.core.conj.call(null,acc,result_str);
var G__28201 = iter_result;
clauses__$1 = G__28199;
acc = G__28200;
navigator__$1 = G__28201;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28206 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var else$ = temp__4425__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28207 = cljs.core.nth.call(null,vec__28206,(0),null);
var eol_str = cljs.core.nth.call(null,vec__28207,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__28206,(1),null);
var navigator__$1 = (function (){var or__16832__auto__ = new_navigator;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return navigator;
}
})();
var vec__28208 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__28208,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__28208,(1),null);
var navigator__$2 = (function (){var or__16832__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__16832__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__16832__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__28209 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__28209,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__28209,(1),null);
var slots = (function (){var x__17163__auto__ = (1);
var y__17164__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__17163__auto__ = minpad;
var y__17164__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__16820__auto__ = eol_str;
if(cljs.core.truth_(and__16820__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__16820__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_28210__$1 = slots;
var extra_pad_28211__$1 = extra_pad;
var strs_28212__$1 = strs;
var pad_only_28213 = (function (){var or__16832__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_28212__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_28212__$1)){
cljs.pprint.print.call(null,[cljs.core.str(((cljs.core.not.call(null,pad_only_28213))?cljs.core.first.call(null,strs_28212__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__16832__auto__ = pad_only_28213;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = cljs.core.next.call(null,strs_28212__$1);
if(or__16832__auto____$1){
return or__16832__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_28211__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__28214 = (slots_28210__$1 - (1));
var G__28215 = (extra_pad_28211__$1 - (1));
var G__28216 = (cljs.core.truth_(pad_only_28213)?strs_28212__$1:cljs.core.next.call(null,strs_28212__$1));
var G__28217 = false;
slots_28210__$1 = G__28214;
extra_pad_28211__$1 = G__28215;
strs_28212__$1 = G__28216;
pad_only_28213 = G__28217;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28224 = (function (downcase_writer,writer,meta28225){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta28225 = meta28225;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint28224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28226,meta28225__$1){
var self__ = this;
var _28226__$1 = this;
return (new cljs.pprint.t_cljs$pprint28224(self__.downcase_writer,self__.writer,meta28225__$1));
});

cljs.pprint.t_cljs$pprint28224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28226){
var self__ = this;
var _28226__$1 = this;
return self__.meta28225;
});

cljs.pprint.t_cljs$pprint28224.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint28224.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28227 = cljs.core._EQ_;
var expr__28228 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__28227.call(null,String,expr__28228))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__28227.call(null,Number,expr__28228))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28228)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"downcase-writer","downcase-writer",37286911,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a proxy that wraps writer, converting all characters to lower case"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28225","meta28225",-2116679513,null)], null);
});

cljs.pprint.t_cljs$pprint28224.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28224.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28224";

cljs.pprint.t_cljs$pprint28224.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint28224");
});

cljs.pprint.__GT_t_cljs$pprint28224 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28224(downcase_writer__$1,writer__$1,meta28225){
return (new cljs.pprint.t_cljs$pprint28224(downcase_writer__$1,writer__$1,meta28225));
});

}

return (new cljs.pprint.t_cljs$pprint28224(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint28236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28236 = (function (upcase_writer,writer,meta28237){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta28237 = meta28237;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint28236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28238,meta28237__$1){
var self__ = this;
var _28238__$1 = this;
return (new cljs.pprint.t_cljs$pprint28236(self__.upcase_writer,self__.writer,meta28237__$1));
});

cljs.pprint.t_cljs$pprint28236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28238){
var self__ = this;
var _28238__$1 = this;
return self__.meta28237;
});

cljs.pprint.t_cljs$pprint28236.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint28236.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28239 = cljs.core._EQ_;
var expr__28240 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__28239.call(null,String,expr__28240))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__28239.call(null,Number,expr__28240))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28240)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint28236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"upcase-writer","upcase-writer",51077317,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a proxy that wraps writer, converting all characters to upper case"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28237","meta28237",1503452493,null)], null);
});

cljs.pprint.t_cljs$pprint28236.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28236.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28236";

cljs.pprint.t_cljs$pprint28236.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint28236");
});

cljs.pprint.__GT_t_cljs$pprint28236 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28236(upcase_writer__$1,writer__$1,meta28237){
return (new cljs.pprint.t_cljs$pprint28236(upcase_writer__$1,writer__$1,meta28237));
});

}

return (new cljs.pprint.t_cljs$pprint28236(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__16820__auto__ = first_QMARK_;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = f;
if(cljs.core.truth_(and__16820__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case.call(null,f)),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__16820__auto__ = m;
if(cljs.core.truth_(and__16820__auto__)){
return (m.index + (1));
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint28248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28248 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta28249){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28249 = meta28249;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint28248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_28250,meta28249__$1){
var self__ = this;
var _28250__$1 = this;
return (new cljs.pprint.t_cljs$pprint28248(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta28249__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_28250){
var self__ = this;
var _28250__$1 = this;
return self__.meta28249;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28248.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28248.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28251 = cljs.core._EQ_;
var expr__28252 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__28251.call(null,String,expr__28252))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__28251.call(null,Number,expr__28252))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28252)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28248.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"capitalize-word-writer","capitalize-word-writer",196688059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a proxy that wraps writer, capitalizing all words"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta28249","meta28249",-527225542,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint28248.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28248.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28248";

cljs.pprint.t_cljs$pprint28248.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint28248");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint28248 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28248(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta28249){
return (new cljs.pprint.t_cljs$pprint28248(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta28249));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint28248(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint28260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28260 = (function (init_cap_writer,writer,capped,meta28261){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta28261 = meta28261;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint28260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_28262,meta28261__$1){
var self__ = this;
var _28262__$1 = this;
return (new cljs.pprint.t_cljs$pprint28260(self__.init_cap_writer,self__.writer,self__.capped,meta28261__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint28260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_28262){
var self__ = this;
var _28262__$1 = this;
return self__.meta28261;
});})(capped))
;

cljs.pprint.t_cljs$pprint28260.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint28260.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28263 = cljs.core._EQ_;
var expr__28264 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__28263.call(null,String,expr__28264))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__16820__auto__ = m;
if(cljs.core.truth_(and__16820__auto__)){
return m.index;
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__28263.call(null,Number,expr__28264))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__16820__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__16820__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__16820__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28264)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint28260.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"init-cap-writer","init-cap-writer",-861558336,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a proxy that wraps writer, capitalizing the first word"], null)),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta28261","meta28261",1157764972,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint28260.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28260.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28260";

cljs.pprint.t_cljs$pprint28260.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.pprint/t_cljs$pprint28260");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint28260 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28260(init_cap_writer__$1,writer__$1,capped__$1,meta28261){
return (new cljs.pprint.t_cljs$pprint28260(init_cap_writer__$1,writer__$1,capped__$1,meta28261));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint28260(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_28267 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28267;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_28270 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_28271 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_28272 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_28273 = (((current_28272 < colnum_28270))?(colnum_28270 - current_28272):((cljs.core._EQ_.call(null,colinc_28271,(0)))?(0):(colinc_28271 - cljs.core.rem.call(null,(current_28272 - colnum_28270),colinc_28271))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_28273," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_28274 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_28275 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_28276 = (colrel_28274 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_28277 = (((colinc_28275 > (0)))?cljs.core.rem.call(null,start_col_28276,colinc_28275):(0));
var space_count_28278 = (colrel_28274 + ((cljs.core._EQ_.call(null,(0),offset_28277))?(0):(colinc_28275 - offset_28277)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_28278," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28282 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28282,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28282,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28283_28285 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28284_28286 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28284_28286;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28283_28285;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28287_SHARP_,p2__28288_SHARP_,p3__28289_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__28287_SHARP_,p2__28288_SHARP_,p3__28289_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28290_SHARP_,p2__28291_SHARP_,p3__28292_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__28290_SHARP_,p2__28291_SHARP_,p3__28292_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28293_SHARP_,p2__28294_SHARP_,p3__28295_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__28293_SHARP_,p2__28294_SHARP_,p3__28295_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28296_SHARP_,p2__28297_SHARP_,p3__28298_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__28296_SHARP_,p2__28297_SHARP_,p3__28298_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28299_SHARP_,p2__28300_SHARP_,p3__28301_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__28299_SHARP_,p2__28300_SHARP_,p3__28301_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28302_SHARP_,p2__28303_SHARP_,p3__28304_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__28302_SHARP_,p2__28303_SHARP_,p3__28304_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28305_SHARP_,p2__28306_SHARP_,p3__28307_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__28305_SHARP_),p1__28305_SHARP_,p2__28306_SHARP_,p3__28307_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16820__auto__;
}
})())){
return (function (p1__28308_SHARP_,p2__28309_SHARP_,p3__28310_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__28308_SHARP_,p2__28309_SHARP_,p3__28310_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28311_SHARP_,p2__28312_SHARP_,p3__28313_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__28311_SHARP_,p2__28312_SHARP_,p3__28313_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28314_SHARP_,p2__28315_SHARP_,p3__28316_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__28314_SHARP_,p2__28315_SHARP_,p3__28316_SHARP_);
});
} else {
return (function (p1__28317_SHARP_,p2__28318_SHARP_,p3__28319_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__28317_SHARP_,p2__28318_SHARP_,p3__28319_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28329 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__28329,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__28329,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__17735__auto___28335 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28336 = (0);
while(true){
if((i_28336 < n__17735__auto___28335)){
cljs.pprint.prn.call(null);

var G__28337 = (i_28336 + (1));
i_28336 = G__28337;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_28338 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_28338 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__17735__auto___28339 = (cnt_28338 - (1));
var i_28340 = (0);
while(true){
if((i_28340 < n__17735__auto___28339)){
cljs.pprint.prn.call(null);

var G__28341 = (i_28340 + (1));
i_28340 = G__28341;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__17735__auto___28342 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_28343 = (0);
while(true){
if((i_28343 < n__17735__auto___28342)){
cljs.pprint.print.call(null,"\f");

var G__28344 = (i_28343 + (1));
i_28343 = G__28344;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28320_SHARP_,p2__28321_SHARP_,p3__28322_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__28320_SHARP_,p2__28321_SHARP_,p3__28322_SHARP_);
});
} else {
return (function (p1__28323_SHARP_,p2__28324_SHARP_,p3__28325_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__28323_SHARP_,p2__28324_SHARP_,p3__28325_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__28330 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__28330,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28330,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28331 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__28331,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28331,(1),null);
var vec__28332 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__28332,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__28332,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16820__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__28326_SHARP_,p2__28327_SHARP_,p3__28328_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__28326_SHARP_,p2__28327_SHARP_,p3__28328_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__16820__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__16820__auto__ = arg1;
if(cljs.core.truth_(and__16820__auto__)){
var and__16820__auto____$1 = arg2;
if(cljs.core.truth_(and__16820__auto____$1)){
return arg3;
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__16820__auto__ = arg1;
if(cljs.core.truth_(and__16820__auto__)){
return arg2;
} else {
return and__16820__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__16832__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__28333 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28333,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28333,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__28334 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__28334,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__28334,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28345){
var vec__28347 = p__28345;
var s = cljs.core.nth.call(null,vec__28347,(0),null);
var offset = cljs.core.nth.call(null,vec__28347,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__28347,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28348){
var vec__28350 = p__28348;
var p = cljs.core.nth.call(null,vec__28350,(0),null);
var offset = cljs.core.nth.call(null,vec__28350,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__28353){
var vec__28354 = p__28353;
var s__$1 = cljs.core.nth.call(null,vec__28354,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__28354,(1),null);
var flags = cljs.core.nth.call(null,vec__28354,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,[cljs.core.str("Flag \""),cljs.core.str(cljs.core.first.call(null,s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__16820__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16820__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16820__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__16820__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16820__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16820__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__16820__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__16820__auto__){
var and__16820__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__16820__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__16820__auto____$1;
}
} else {
return and__16820__auto__;
}
})())){
return cljs.pprint.format_error.call(null,[cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__17170__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__17171__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__17170__auto__ < y__17171__auto__) ? x__17170__auto__ : y__17171__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28355_SHARP_,p2__28356_SHARP_){
var val = cljs.core.first.call(null,p1__28355_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__28356_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,[cljs.core.str("Parameter "),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,p2__28356_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__28355_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__17604__auto__ = (function cljs$pprint$map_params_$_iter__28372(s__28373){
return (new cljs.core.LazySeq(null,(function (){
var s__28373__$1 = s__28373;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28373__$1);
if(temp__4425__auto__){
var s__28373__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28373__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__28373__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__28375 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__28374 = (0);
while(true){
if((i__28374 < size__17603__auto__)){
var vec__28380 = cljs.core._nth.call(null,c__17602__auto__,i__28374);
var name = cljs.core.nth.call(null,vec__28380,(0),null);
var vec__28381 = cljs.core.nth.call(null,vec__28380,(1),null);
var default$ = cljs.core.nth.call(null,vec__28381,(0),null);
cljs.core.chunk_append.call(null,b__28375,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__28384 = (i__28374 + (1));
i__28374 = G__28384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28375),cljs$pprint$map_params_$_iter__28372.call(null,cljs.core.chunk_rest.call(null,s__28373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28375),null);
}
} else {
var vec__28382 = cljs.core.first.call(null,s__28373__$2);
var name = cljs.core.nth.call(null,vec__28382,(0),null);
var vec__28383 = cljs.core.nth.call(null,vec__28382,(1),null);
var default$ = cljs.core.nth.call(null,vec__28383,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__28372.call(null,cljs.core.rest.call(null,s__28373__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17604__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__28357_SHARP_,p2__28358_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__28357_SHARP_,p2__28358_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__28359_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__28359_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__28389 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__28389,(0),null);
var vec__28390 = cljs.core.nth.call(null,vec__28389,(1),null);
var rest = cljs.core.nth.call(null,vec__28390,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__28390,(1),null);
var vec__28391 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__28391,(0),null);
var vec__28392 = cljs.core.nth.call(null,vec__28391,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__28392,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__28392,(1),null);
var flags = cljs.core.nth.call(null,vec__28392,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,[cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__16820__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__16820__auto__;
}
});
cljs.pprint.collect_clauses;
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__28394 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__28394,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__28394,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__28399){
var vec__28400 = p__28399;
var clause_map = cljs.core.nth.call(null,vec__28400,(0),null);
var saw_else = cljs.core.nth.call(null,vec__28400,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__28400,(2),null);
var vec__28401 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__28401,(0),null);
var vec__28402 = cljs.core.nth.call(null,vec__28401,(1),null);
var type = cljs.core.nth.call(null,vec__28402,(0),null);
var right_params = cljs.core.nth.call(null,vec__28402,(1),null);
var else_params = cljs.core.nth.call(null,vec__28402,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__28402,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params], true, false)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_28406 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_28406){
return (function (p__28407){
var vec__28408 = p__28407;
var s = cljs.core.nth.call(null,vec__28408,(0),null);
var offset = cljs.core.nth.call(null,vec__28408,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_28406))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_28406;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__16832__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__16832__auto____$1)){
return or__16832__auto____$1;
} else {
return cljs.core.some.call(null,cljs$pprint$needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__28409 = cljs.core.next.call(null,format__$1);
format__$1 = G__28409;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args28410 = [];
var len__17890__auto___28416 = arguments.length;
var i__17891__auto___28417 = (0);
while(true){
if((i__17891__auto___28417 < len__17890__auto___28416)){
args28410.push((arguments[i__17891__auto___28417]));

var G__28418 = (i__17891__auto___28417 + (1));
i__17891__auto___28417 = G__28418;
continue;
} else {
}
break;
}

var G__28412 = args28410.length;
switch (G__28412) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28410.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__16820__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__16820__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_28413 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_28413;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28414 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__28414,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__28414,(1),null);
var vec__28415 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__28415,(0),null);
var offsets = cljs.core.nth.call(null,vec__28415,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__16820__auto__ = macro_char;
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__16820__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28423_28426 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28424_28427 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count28425_28428 = (0);
var alis_28429__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28425_28428 < cljs.core._STAR_print_length_STAR_))){
if(alis_28429__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_28429__$1));

if(cljs.core.next.call(null,alis_28429__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28430 = (length_count28425_28428 + (1));
var G__28431 = cljs.core.next.call(null,alis_28429__$1);
length_count28425_28428 = G__28430;
alis_28429__$1 = G__28431;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28424_28427;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28423_28426;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28435_28438 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28436_28439 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28437_28440 = (0);
var aseq_28441 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28437_28440 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28441){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_28441));

if(cljs.core.next.call(null,aseq_28441)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28442 = (length_count28437_28440 + (1));
var G__28443 = cljs.core.next.call(null,aseq_28441);
length_count28437_28440 = G__28442;
aseq_28441 = G__28443;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28436_28439;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28435_28438;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27012__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28444__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28444 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28445__i = 0, G__28445__a = new Array(arguments.length -  0);
while (G__28445__i < G__28445__a.length) {G__28445__a[G__28445__i] = arguments[G__28445__i + 0]; ++G__28445__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28445__a,0);
} 
return G__28444__delegate.call(this,args__27014__auto__);};
G__28444.cljs$lang$maxFixedArity = 0;
G__28444.cljs$lang$applyTo = (function (arglist__28446){
var args__27014__auto__ = cljs.core.seq(arglist__28446);
return G__28444__delegate(args__27014__auto__);
});
G__28444.cljs$core$IFn$_invoke$arity$variadic = G__28444__delegate;
return G__28444;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28452_28457 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28453_28458 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count28454_28459 = (0);
var aseq_28460 = cljs.core.seq.call(null,amap);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28454_28459 < cljs.core._STAR_print_length_STAR_))){
if(aseq_28460){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28455_28461 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28456_28462 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_28460));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_28460)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28456_28462;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28455_28461;
}}


if(cljs.core.next.call(null,aseq_28460)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28463 = (length_count28454_28459 + (1));
var G__28464 = cljs.core.next.call(null,aseq_28460);
length_count28454_28459 = G__28463;
aseq_28460 = G__28464;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28453_28458;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28452_28457;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__27012__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28465__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28465 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28466__i = 0, G__28466__a = new Array(arguments.length -  0);
while (G__28466__i < G__28466__a.length) {G__28466__a[G__28466__i] = arguments[G__28466__i + 0]; ++G__28466__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28466__a,0);
} 
return G__28465__delegate.call(this,args__27014__auto__);};
G__28465.cljs$lang$maxFixedArity = 0;
G__28465.cljs$lang$applyTo = (function (arglist__28467){
var args__27014__auto__ = cljs.core.seq(arglist__28467);
return G__28465__delegate(args__27014__auto__);
});
G__28465.cljs$core$IFn$_invoke$arity$variadic = G__28465__delegate;
return G__28465;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__16832__auto__ = (function (){var temp__4425__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28472_28476 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28473_28477 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__16820__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__16820__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__16820__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28473_28477;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28472_28476;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27012__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28478__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28478 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28479__i = 0, G__28479__a = new Array(arguments.length -  0);
while (G__28479__i < G__28479__a.length) {G__28479__a[G__28479__i] = arguments[G__28479__i + 0]; ++G__28479__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28479__a,0);
} 
return G__28478__delegate.call(this,args__27014__auto__);};
G__28478.cljs$lang$maxFixedArity = 0;
G__28478.cljs$lang$applyTo = (function (arglist__28480){
var args__27014__auto__ = cljs.core.seq(arglist__28480);
return G__28478__delegate(args__27014__auto__);
});
G__28478.cljs$core$IFn$_invoke$arity$variadic = G__28478__delegate;
return G__28478;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.pprint_simple_code_list;
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__28491 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__28491,(0),null);
var end = cljs.core.nth.call(null,vec__28491,(1),null);
var vec__28492 = reference;
var keyw = cljs.core.nth.call(null,vec__28492,(0),null);
var args = cljs.core.nthnext.call(null,vec__28492,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28493_28499 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28494_28500 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__27012__auto__ = "~w~:i";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28501__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28501 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28502__i = 0, G__28502__a = new Array(arguments.length -  0);
while (G__28502__i < G__28502__a.length) {G__28502__a[G__28502__i] = arguments[G__28502__i + 0]; ++G__28502__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28502__a,0);
} 
return G__28501__delegate.call(this,args__27014__auto__);};
G__28501.cljs$lang$maxFixedArity = 0;
G__28501.cljs$lang$applyTo = (function (arglist__28503){
var args__27014__auto__ = cljs.core.seq(arglist__28503);
return G__28501__delegate(args__27014__auto__);
});
G__28501.cljs$core$IFn$_invoke$arity$variadic = G__28501__delegate;
return G__28501;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null,keyw);

var args_28504__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_28504__$1)){
(function (){var format_in__27012__auto__ = " ";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28505__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28505 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28506__i = 0, G__28506__a = new Array(arguments.length -  0);
while (G__28506__i < G__28506__a.length) {G__28506__a[G__28506__i] = arguments[G__28506__i + 0]; ++G__28506__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28506__a,0);
} 
return G__28505__delegate.call(this,args__27014__auto__);};
G__28505.cljs$lang$maxFixedArity = 0;
G__28505.cljs$lang$applyTo = (function (arglist__28507){
var args__27014__auto__ = cljs.core.seq(arglist__28507);
return G__28505__delegate(args__27014__auto__);
});
G__28505.cljs$core$IFn$_invoke$arity$variadic = G__28505__delegate;
return G__28505;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null);

var arg_28508 = cljs.core.first.call(null,args_28504__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_28508)){
var vec__28495_28509 = cljs.pprint.brackets.call(null,arg_28508);
var start_28510__$1 = cljs.core.nth.call(null,vec__28495_28509,(0),null);
var end_28511__$1 = cljs.core.nth.call(null,vec__28495_28509,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28496_28512 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28497_28513 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_28510__$1,null,end_28511__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_28508),(3))) && ((cljs.core.second.call(null,arg_28508) instanceof cljs.core.Keyword))){
var vec__28498_28514 = arg_28508;
var ns_28515 = cljs.core.nth.call(null,vec__28498_28514,(0),null);
var kw_28516 = cljs.core.nth.call(null,vec__28498_28514,(1),null);
var lis_28517 = cljs.core.nth.call(null,vec__28498_28514,(2),null);
(function (){var format_in__27012__auto__ = "~w ~w ";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28498_28514,ns_28515,kw_28516,lis_28517,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28518__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28518 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28519__i = 0, G__28519__a = new Array(arguments.length -  0);
while (G__28519__i < G__28519__a.length) {G__28519__a[G__28519__i] = arguments[G__28519__i + 0]; ++G__28519__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28519__a,0);
} 
return G__28518__delegate.call(this,args__27014__auto__);};
G__28518.cljs$lang$maxFixedArity = 0;
G__28518.cljs$lang$applyTo = (function (arglist__28520){
var args__27014__auto__ = cljs.core.seq(arglist__28520);
return G__28518__delegate(args__27014__auto__);
});
G__28518.cljs$core$IFn$_invoke$arity$variadic = G__28518__delegate;
return G__28518;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28498_28514,ns_28515,kw_28516,lis_28517,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null,ns_28515,kw_28516);

if(cljs.core.sequential_QMARK_.call(null,lis_28517)){
(function (){var format_in__27012__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_28517))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28498_28514,ns_28515,kw_28516,lis_28517,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28521__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28521 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28522__i = 0, G__28522__a = new Array(arguments.length -  0);
while (G__28522__i < G__28522__a.length) {G__28522__a[G__28522__i] = arguments[G__28522__i + 0]; ++G__28522__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28522__a,0);
} 
return G__28521__delegate.call(this,args__27014__auto__);};
G__28521.cljs$lang$maxFixedArity = 0;
G__28521.cljs$lang$applyTo = (function (arglist__28523){
var args__27014__auto__ = cljs.core.seq(arglist__28523);
return G__28521__delegate(args__27014__auto__);
});
G__28521.cljs$core$IFn$_invoke$arity$variadic = G__28521__delegate;
return G__28521;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28498_28514,ns_28515,kw_28516,lis_28517,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null,lis_28517);
} else {
cljs.pprint.write_out.call(null,lis_28517);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__27012__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28524__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28524 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28525__i = 0, G__28525__a = new Array(arguments.length -  0);
while (G__28525__i < G__28525__a.length) {G__28525__a[G__28525__i] = arguments[G__28525__i + 0]; ++G__28525__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28525__a,0);
} 
return G__28524__delegate.call(this,args__27014__auto__);};
G__28524.cljs$lang$maxFixedArity = 0;
G__28524.cljs$lang$applyTo = (function (arglist__28526){
var args__27014__auto__ = cljs.core.seq(arglist__28526);
return G__28524__delegate(args__27014__auto__);
});
G__28524.cljs$core$IFn$_invoke$arity$variadic = G__28524__delegate;
return G__28524;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28496_28512,_STAR_current_length_STAR_28497_28513,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})(),arg_28508);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28497_28513;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28496_28512;
}}


if(cljs.core.next.call(null,args_28504__$1)){
(function (){var format_in__27012__auto__ = "~_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28527__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28527 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28528__i = 0, G__28528__a = new Array(arguments.length -  0);
while (G__28528__i < G__28528__a.length) {G__28528__a[G__28528__i] = arguments[G__28528__i + 0]; ++G__28528__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28528__a,0);
} 
return G__28527__delegate.call(this,args__27014__auto__);};
G__28527.cljs$lang$maxFixedArity = 0;
G__28527.cljs$lang$applyTo = (function (arglist__28529){
var args__27014__auto__ = cljs.core.seq(arglist__28529);
return G__28527__delegate(args__27014__auto__);
});
G__28527.cljs$core$IFn$_invoke$arity$variadic = G__28527__delegate;
return G__28527;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,vec__28495_28509,start_28510__$1,end_28511__$1,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_28508);

if(cljs.core.next.call(null,args_28504__$1)){
(function (){var format_in__27012__auto__ = "~:_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (args_28504__$1,format_in__27012__auto__,cf__27013__auto__,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args){
return (function() { 
var G__28530__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28530 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28531__i = 0, G__28531__a = new Array(arguments.length -  0);
while (G__28531__i < G__28531__a.length) {G__28531__a[G__28531__i] = arguments[G__28531__i + 0]; ++G__28531__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28531__a,0);
} 
return G__28530__delegate.call(this,args__27014__auto__);};
G__28530.cljs$lang$maxFixedArity = 0;
G__28530.cljs$lang$applyTo = (function (arglist__28532){
var args__27014__auto__ = cljs.core.seq(arglist__28532);
return G__28530__delegate(args__27014__auto__);
});
G__28530.cljs$core$IFn$_invoke$arity$variadic = G__28530__delegate;
return G__28530;
})()
;
;})(args_28504__$1,format_in__27012__auto__,cf__27013__auto__,arg_28508,_STAR_current_level_STAR_28493_28499,_STAR_current_length_STAR_28494_28500,vec__28491,start,end,vec__28492,keyw,args))
})().call(null);
} else {
}
}

var G__28533 = cljs.core.next.call(null,args_28504__$1);
args_28504__$1 = G__28533;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28494_28500;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28493_28499;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__28539 = alis;
var ns_sym = cljs.core.nth.call(null,vec__28539,(0),null);
var ns_name = cljs.core.nth.call(null,vec__28539,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__28539,(2));
var vec__28540 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__28540,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__28540,(1),null);
var vec__28541 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__28541,(0),null);
var references = cljs.core.nth.call(null,vec__28541,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28542_28544 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28543_28545 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27012__auto__ = "~w ~1I~@_~w";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references){
return (function() { 
var G__28546__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28546 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28547__i = 0, G__28547__a = new Array(arguments.length -  0);
while (G__28547__i < G__28547__a.length) {G__28547__a[G__28547__i] = arguments[G__28547__i + 0]; ++G__28547__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28547__a,0);
} 
return G__28546__delegate.call(this,args__27014__auto__);};
G__28546.cljs$lang$maxFixedArity = 0;
G__28546.cljs$lang$applyTo = (function (arglist__28548){
var args__27014__auto__ = cljs.core.seq(arglist__28548);
return G__28546__delegate(args__27014__auto__);
});
G__28546.cljs$core$IFn$_invoke$arity$variadic = G__28546__delegate;
return G__28546;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__16832__auto__ = doc_str;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = attr_map;
if(cljs.core.truth_(or__16832__auto____$1)){
return or__16832__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__27012__auto__ = "~@:_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references){
return (function() { 
var G__28549__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28549 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28550__i = 0, G__28550__a = new Array(arguments.length -  0);
while (G__28550__i < G__28550__a.length) {G__28550__a[G__28550__i] = arguments[G__28550__i + 0]; ++G__28550__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28550__a,0);
} 
return G__28549__delegate.call(this,args__27014__auto__);};
G__28549.cljs$lang$maxFixedArity = 0;
G__28549.cljs$lang$applyTo = (function (arglist__28551){
var args__27014__auto__ = cljs.core.seq(arglist__28551);
return G__28549__delegate(args__27014__auto__);
});
G__28549.cljs$core$IFn$_invoke$arity$variadic = G__28549__delegate;
return G__28549;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__16832__auto__ = attr_map;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27012__auto__ = "~w~:[~;~:@_~]";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references){
return (function() { 
var G__28552__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28552 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28553__i = 0, G__28553__a = new Array(arguments.length -  0);
while (G__28553__i < G__28553__a.length) {G__28553__a[G__28553__i] = arguments[G__28553__i + 0]; ++G__28553__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28553__a,0);
} 
return G__28552__delegate.call(this,args__27014__auto__);};
G__28552.cljs$lang$maxFixedArity = 0;
G__28552.cljs$lang$applyTo = (function (arglist__28554){
var args__27014__auto__ = cljs.core.seq(arglist__28554);
return G__28552__delegate(args__27014__auto__);
});
G__28552.cljs$core$IFn$_invoke$arity$variadic = G__28552__delegate;
return G__28552;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28542_28544,_STAR_current_length_STAR_28543_28545,vec__28539,ns_sym,ns_name,stuff,vec__28540,doc_str,stuff__$1,vec__28541,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_28555__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_28555__$1));

var temp__4425__auto___28556 = cljs.core.next.call(null,references_28555__$1);
if(temp__4425__auto___28556){
var references_28557__$2 = temp__4425__auto___28556;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28558 = references_28557__$2;
references_28555__$1 = G__28558;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28543_28545;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28542_28544;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27012__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28559__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28559 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28560__i = 0, G__28560__a = new Array(arguments.length -  0);
while (G__28560__i < G__28560__a.length) {G__28560__a[G__28560__i] = arguments[G__28560__i + 0]; ++G__28560__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28560__a,0);
} 
return G__28559__delegate.call(this,args__27014__auto__);};
G__28559.cljs$lang$maxFixedArity = 0;
G__28559.cljs$lang$applyTo = (function (arglist__28561){
var args__27014__auto__ = cljs.core.seq(arglist__28561);
return G__28559__delegate(args__27014__auto__);
});
G__28559.cljs$core$IFn$_invoke$arity$variadic = G__28559__delegate;
return G__28559;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__27012__auto__ = " ~_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28562__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28562 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28563__i = 0, G__28563__a = new Array(arguments.length -  0);
while (G__28563__i < G__28563__a.length) {G__28563__a[G__28563__i] = arguments[G__28563__i + 0]; ++G__28563__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28563__a,0);
} 
return G__28562__delegate.call(this,args__27014__auto__);};
G__28562.cljs$lang$maxFixedArity = 0;
G__28562.cljs$lang$applyTo = (function (arglist__28564){
var args__27014__auto__ = cljs.core.seq(arglist__28564);
return G__28562__delegate(args__27014__auto__);
});
G__28562.cljs$core$IFn$_invoke$arity$variadic = G__28562__delegate;
return G__28562;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})().call(null);
} else {
(function (){var format_in__27012__auto__ = " ~@_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28565__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28565 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28566__i = 0, G__28566__a = new Array(arguments.length -  0);
while (G__28566__i < G__28566__a.length) {G__28566__a[G__28566__i] = arguments[G__28566__i + 0]; ++G__28566__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28566__a,0);
} 
return G__28565__delegate.call(this,args__27014__auto__);};
G__28565.cljs$lang$maxFixedArity = 0;
G__28565.cljs$lang$applyTo = (function (arglist__28567){
var args__27014__auto__ = cljs.core.seq(arglist__28567);
return G__28565__delegate(args__27014__auto__);
});
G__28565.cljs$core$IFn$_invoke$arity$variadic = G__28565__delegate;
return G__28565;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})().call(null);
}

return (function (){var format_in__27012__auto__ = "~{~w~^ ~_~}";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28568__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28568 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28569__i = 0, G__28569__a = new Array(arguments.length -  0);
while (G__28569__i < G__28569__a.length) {G__28569__a[G__28569__i] = arguments[G__28569__i + 0]; ++G__28569__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28569__a,0);
} 
return G__28568__delegate.call(this,args__27014__auto__);};
G__28568.cljs$lang$maxFixedArity = 0;
G__28568.cljs$lang$applyTo = (function (arglist__28570){
var args__27014__auto__ = cljs.core.seq(arglist__28570);
return G__28568__delegate(args__27014__auto__);
});
G__28568.cljs$core$IFn$_invoke$arity$variadic = G__28568__delegate;
return G__28568;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__27012__auto__ = " ~_~{~w~^ ~_~}";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28571__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28571 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28572__i = 0, G__28572__a = new Array(arguments.length -  0);
while (G__28572__i < G__28572__a.length) {G__28572__a[G__28572__i] = arguments[G__28572__i + 0]; ++G__28572__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28572__a,0);
} 
return G__28571__delegate.call(this,args__27014__auto__);};
G__28571.cljs$lang$maxFixedArity = 0;
G__28571.cljs$lang$applyTo = (function (arglist__28573){
var args__27014__auto__ = cljs.core.seq(arglist__28573);
return G__28571__delegate(args__27014__auto__);
});
G__28571.cljs$core$IFn$_invoke$arity$variadic = G__28571__delegate;
return G__28571;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__28579 = alis;
var defn_sym = cljs.core.nth.call(null,vec__28579,(0),null);
var defn_name = cljs.core.nth.call(null,vec__28579,(1),null);
var stuff = cljs.core.nthnext.call(null,vec__28579,(2));
var vec__28580 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__28580,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__28580,(1),null);
var vec__28581 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__28581,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__28581,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28582_28584 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28583_28585 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27012__auto__ = "~w ~1I~@_~w";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2){
return (function() { 
var G__28586__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28586 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28587__i = 0, G__28587__a = new Array(arguments.length -  0);
while (G__28587__i < G__28587__a.length) {G__28587__a[G__28587__i] = arguments[G__28587__i + 0]; ++G__28587__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28587__a,0);
} 
return G__28586__delegate.call(this,args__27014__auto__);};
G__28586.cljs$lang$maxFixedArity = 0;
G__28586.cljs$lang$applyTo = (function (arglist__28588){
var args__27014__auto__ = cljs.core.seq(arglist__28588);
return G__28586__delegate(args__27014__auto__);
});
G__28586.cljs$core$IFn$_invoke$arity$variadic = G__28586__delegate;
return G__28586;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__27012__auto__ = " ~_~w";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2){
return (function() { 
var G__28589__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28589 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28590__i = 0, G__28590__a = new Array(arguments.length -  0);
while (G__28590__i < G__28590__a.length) {G__28590__a[G__28590__i] = arguments[G__28590__i + 0]; ++G__28590__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28590__a,0);
} 
return G__28589__delegate.call(this,args__27014__auto__);};
G__28589.cljs$lang$maxFixedArity = 0;
G__28589.cljs$lang$applyTo = (function (arglist__28591){
var args__27014__auto__ = cljs.core.seq(arglist__28591);
return G__28589__delegate(args__27014__auto__);
});
G__28589.cljs$core$IFn$_invoke$arity$variadic = G__28589__delegate;
return G__28589;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27012__auto__ = " ~_~w";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2){
return (function() { 
var G__28592__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28592 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28593__i = 0, G__28593__a = new Array(arguments.length -  0);
while (G__28593__i < G__28593__a.length) {G__28593__a[G__28593__i] = arguments[G__28593__i + 0]; ++G__28593__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28593__a,0);
} 
return G__28592__delegate.call(this,args__27014__auto__);};
G__28592.cljs$lang$maxFixedArity = 0;
G__28592.cljs$lang$applyTo = (function (arglist__28594){
var args__27014__auto__ = cljs.core.seq(arglist__28594);
return G__28592__delegate(args__27014__auto__);
});
G__28592.cljs$core$IFn$_invoke$arity$variadic = G__28592__delegate;
return G__28592;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28582_28584,_STAR_current_length_STAR_28583_28585,vec__28579,defn_sym,defn_name,stuff,vec__28580,doc_str,stuff__$1,vec__28581,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__16832__auto__ = doc_str;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__16832__auto__ = doc_str;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28583_28585;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28582_28584;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28600_28605 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28601_28606 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count28602_28607 = (0);
var binding_28608 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28602_28607 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_28608)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28603_28609 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28604_28610 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_28608));

if(cljs.core.next.call(null,binding_28608)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_28608));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28604_28610;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28603_28609;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_28608))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28611 = (length_count28602_28607 + (1));
var G__28612 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_28608));
length_count28602_28607 = G__28611;
binding_28608 = G__28612;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28601_28606;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28600_28605;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28615_28617 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28616_28618 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__27012__auto__ = "~w ~1I~@_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28615_28617,_STAR_current_length_STAR_28616_28618,base_sym){
return (function() { 
var G__28619__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28619 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28620__i = 0, G__28620__a = new Array(arguments.length -  0);
while (G__28620__i < G__28620__a.length) {G__28620__a[G__28620__i] = arguments[G__28620__i + 0]; ++G__28620__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28620__a,0);
} 
return G__28619__delegate.call(this,args__27014__auto__);};
G__28619.cljs$lang$maxFixedArity = 0;
G__28619.cljs$lang$applyTo = (function (arglist__28621){
var args__27014__auto__ = cljs.core.seq(arglist__28621);
return G__28619__delegate(args__27014__auto__);
});
G__28619.cljs$core$IFn$_invoke$arity$variadic = G__28619__delegate;
return G__28619;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28615_28617,_STAR_current_length_STAR_28616_28618,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__27012__auto__ = " ~_~{~w~^ ~_~}";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28615_28617,_STAR_current_length_STAR_28616_28618,base_sym){
return (function() { 
var G__28622__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28622 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28623__i = 0, G__28623__a = new Array(arguments.length -  0);
while (G__28623__i < G__28623__a.length) {G__28623__a[G__28623__i] = arguments[G__28623__i + 0]; ++G__28623__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28623__a,0);
} 
return G__28622__delegate.call(this,args__27014__auto__);};
G__28622.cljs$lang$maxFixedArity = 0;
G__28622.cljs$lang$applyTo = (function (arglist__28624){
var args__27014__auto__ = cljs.core.seq(arglist__28624);
return G__28622__delegate(args__27014__auto__);
});
G__28622.cljs$core$IFn$_invoke$arity$variadic = G__28622__delegate;
return G__28622;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28615_28617,_STAR_current_length_STAR_28616_28618,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28616_28618;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28615_28617;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27012__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__){
return (function() { 
var G__28625__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28625 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28626__i = 0, G__28626__a = new Array(arguments.length -  0);
while (G__28626__i < G__28626__a.length) {G__28626__a[G__28626__i] = arguments[G__28626__i + 0]; ++G__28626__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28626__a,0);
} 
return G__28625__delegate.call(this,args__27014__auto__);};
G__28625.cljs$lang$maxFixedArity = 0;
G__28625.cljs$lang$applyTo = (function (arglist__28627){
var args__27014__auto__ = cljs.core.seq(arglist__28627);
return G__28625__delegate(args__27014__auto__);
});
G__28625.cljs$core$IFn$_invoke$arity$variadic = G__28625__delegate;
return G__28625;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28633_28638 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28634_28639 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count28635_28640 = (0);
var alis_28641__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28635_28640 < cljs.core._STAR_print_length_STAR_))){
if(alis_28641__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28636_28642 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28637_28643 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_28641__$1));

if(cljs.core.next.call(null,alis_28641__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_28641__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28637_28643;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28636_28642;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_28641__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28644 = (length_count28635_28640 + (1));
var G__28645 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_28641__$1));
length_count28635_28640 = G__28644;
alis_28641__$1 = G__28645;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28634_28639;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28633_28638;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28651_28656 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28652_28657 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__27012__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28651_28656,_STAR_current_length_STAR_28652_28657){
return (function() { 
var G__28658__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28658 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28659__i = 0, G__28659__a = new Array(arguments.length -  0);
while (G__28659__i < G__28659__a.length) {G__28659__a[G__28659__i] = arguments[G__28659__i + 0]; ++G__28659__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28659__a,0);
} 
return G__28658__delegate.call(this,args__27014__auto__);};
G__28658.cljs$lang$maxFixedArity = 0;
G__28658.cljs$lang$applyTo = (function (arglist__28660){
var args__27014__auto__ = cljs.core.seq(arglist__28660);
return G__28658__delegate(args__27014__auto__);
});
G__28658.cljs$core$IFn$_invoke$arity$variadic = G__28658__delegate;
return G__28658;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_current_level_STAR_28651_28656,_STAR_current_length_STAR_28652_28657))
})(),alis);

var length_count28653_28661 = (0);
var alis_28662__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28653_28661 < cljs.core._STAR_print_length_STAR_))){
if(alis_28662__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28654_28663 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28655_28664 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_28662__$1));

if(cljs.core.next.call(null,alis_28662__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_28662__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28655_28664;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28654_28663;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_28662__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28665 = (length_count28653_28661 + (1));
var G__28666 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_28662__$1));
length_count28653_28661 = G__28665;
alis_28662__$1 = G__28666;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28652_28657;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28651_28656;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_28670 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,args),"%"], true, false):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_28670,args,nlis){
return (function (p1__28667_SHARP_,p2__28668_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28667_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__28668_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_28670,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__27012__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27013__auto__ = ((typeof format_in__27012__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__27012__auto__):format_in__27012__auto__);
return ((function (format_in__27012__auto__,cf__27013__auto__,_STAR_symbol_map_STAR_28670,args,nlis){
return (function() { 
var G__28671__delegate = function (args__27014__auto__){
var navigator__27015__auto__ = cljs.pprint.init_navigator.call(null,args__27014__auto__);
return cljs.pprint.execute_format.call(null,cf__27013__auto__,navigator__27015__auto__);
};
var G__28671 = function (var_args){
var args__27014__auto__ = null;
if (arguments.length > 0) {
var G__28672__i = 0, G__28672__a = new Array(arguments.length -  0);
while (G__28672__i < G__28672__a.length) {G__28672__a[G__28672__i] = arguments[G__28672__i + 0]; ++G__28672__i;}
  args__27014__auto__ = new cljs.core.IndexedSeq(G__28672__a,0);
} 
return G__28671__delegate.call(this,args__27014__auto__);};
G__28671.cljs$lang$maxFixedArity = 0;
G__28671.cljs$lang$applyTo = (function (arglist__28673){
var args__27014__auto__ = cljs.core.seq(arglist__28673);
return G__28671__delegate(args__27014__auto__);
});
G__28671.cljs$core$IFn$_invoke$arity$variadic = G__28671__delegate;
return G__28671;
})()
;
;})(format_in__27012__auto__,cf__27013__auto__,_STAR_symbol_map_STAR_28670,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_28670;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_28677_28680 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_28678_28681 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count28679_28682 = (0);
var alis_28683__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count28679_28682 < cljs.core._STAR_print_length_STAR_))){
if(alis_28683__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_28683__$1));

if(cljs.core.next.call(null,alis_28683__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__28684 = (length_count28679_28682 + (1));
var G__28685 = cljs.core.next.call(null,alis_28683__$1);
length_count28679_28682 = G__28684;
alis_28683__$1 = G__28685;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_28678_28681;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_28677_28680;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__17604__auto__ = (function cljs$pprint$two_forms_$_iter__28690(s__28691){
return (new cljs.core.LazySeq(null,(function (){
var s__28691__$1 = s__28691;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28691__$1);
if(temp__4425__auto__){
var s__28691__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28691__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__28691__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__28693 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__28692 = (0);
while(true){
if((i__28692 < size__17603__auto__)){
var x = cljs.core._nth.call(null,c__17602__auto__,i__28692);
cljs.core.chunk_append.call(null,b__28693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__28694 = (i__28692 + (1));
i__28692 = G__28694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28693),cljs$pprint$two_forms_$_iter__28690.call(null,cljs.core.chunk_rest.call(null,s__28691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28693),null);
}
} else {
var x = cljs.core.first.call(null,s__28691__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__28690.call(null,cljs.core.rest.call(null,s__28691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17604__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__28695_SHARP_){
var vec__28697 = p1__28695_SHARP_;
var s = cljs.core.nth.call(null,vec__28697,(0),null);
var f = cljs.core.nth.call(null,vec__28697,(1),null);
if(cljs.core.not.call(null,(function (){var or__16832__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__28695_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4423__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4423__auto__)){
var special_form = temp__4423__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4423__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4423__auto__)){
var arg_num = temp__4423__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__17163__auto__ = (0);
var y__17164__auto__ = (width - cljs.core.count.call(null,s));
return ((x__17163__auto__ > y__17164__auto__) ? x__17163__auto__ : y__17164__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args28701 = [];
var len__17890__auto___28717 = arguments.length;
var i__17891__auto___28718 = (0);
while(true){
if((i__17891__auto___28718 < len__17890__auto___28717)){
args28701.push((arguments[i__17891__auto___28718]));

var G__28719 = (i__17891__auto___28718 + (1));
i__17891__auto___28718 = G__28719;
continue;
} else {
}
break;
}

var G__28703 = args28701.length;
switch (G__28703) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28701.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_28704 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_28704){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_28704){
return (function (p1__28698_SHARP_){
return cljs.core.count.call(null,[cljs.core.str(cljs.core.get.call(null,p1__28698_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_28704))
,rows));
});})(_STAR_print_newline_STAR_28704))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_28704){
return (function (p1__28699_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__28699_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_28704))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_28704){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__17604__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_28704){
return (function cljs$pprint$iter__28705(s__28706){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_28704){
return (function (){
var s__28706__$1 = s__28706;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28706__$1);
if(temp__4425__auto__){
var s__28706__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28706__$2)){
var c__17602__auto__ = cljs.core.chunk_first.call(null,s__28706__$2);
var size__17603__auto__ = cljs.core.count.call(null,c__17602__auto__);
var b__28708 = cljs.core.chunk_buffer.call(null,size__17603__auto__);
if((function (){var i__28707 = (0);
while(true){
if((i__28707 < size__17603__auto__)){
var vec__28711 = cljs.core._nth.call(null,c__17602__auto__,i__28707);
var col = cljs.core.nth.call(null,vec__28711,(0),null);
var width = cljs.core.nth.call(null,vec__28711,(1),null);
cljs.core.chunk_append.call(null,b__28708,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')));

var G__28721 = (i__28707 + (1));
i__28707 = G__28721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28708),cljs$pprint$iter__28705.call(null,cljs.core.chunk_rest.call(null,s__28706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28708),null);
}
} else {
var vec__28712 = cljs.core.first.call(null,s__28706__$2);
var col = cljs.core.nth.call(null,vec__28712,(0),null);
var width = cljs.core.nth.call(null,vec__28712,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')),cljs$pprint$iter__28705.call(null,cljs.core.rest.call(null,s__28706__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_28704))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_28704))
;
return iter__17604__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__17604__auto__,widths,spacers,_STAR_print_newline_STAR_28704){
return (function (p1__28700_SHARP_){
return cljs.core.get.call(null,row,p1__28700_SHARP_);
});})(iter__17604__auto__,widths,spacers,_STAR_print_newline_STAR_28704))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_28704))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__28713 = cljs.core.seq.call(null,rows);
var chunk__28714 = null;
var count__28715 = (0);
var i__28716 = (0);
while(true){
if((i__28716 < count__28715)){
var row = cljs.core._nth.call(null,chunk__28714,i__28716);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__28722 = seq__28713;
var G__28723 = chunk__28714;
var G__28724 = count__28715;
var G__28725 = (i__28716 + (1));
seq__28713 = G__28722;
chunk__28714 = G__28723;
count__28715 = G__28724;
i__28716 = G__28725;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28713);
if(temp__4425__auto__){
var seq__28713__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28713__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__28713__$1);
var G__28726 = cljs.core.chunk_rest.call(null,seq__28713__$1);
var G__28727 = c__17635__auto__;
var G__28728 = cljs.core.count.call(null,c__17635__auto__);
var G__28729 = (0);
seq__28713 = G__28726;
chunk__28714 = G__28727;
count__28715 = G__28728;
i__28716 = G__28729;
continue;
} else {
var row = cljs.core.first.call(null,seq__28713__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__28730 = cljs.core.next.call(null,seq__28713__$1);
var G__28731 = null;
var G__28732 = (0);
var G__28733 = (0);
seq__28713 = G__28730;
chunk__28714 = G__28731;
count__28715 = G__28732;
i__28716 = G__28733;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28704;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=pprint.js.map