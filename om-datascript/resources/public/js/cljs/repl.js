// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24954_24968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24955_24969 = null;
var count__24956_24970 = (0);
var i__24957_24971 = (0);
while(true){
if((i__24957_24971 < count__24956_24970)){
var f_24972 = cljs.core._nth.call(null,chunk__24955_24969,i__24957_24971);
cljs.core.println.call(null,"  ",f_24972);

var G__24973 = seq__24954_24968;
var G__24974 = chunk__24955_24969;
var G__24975 = count__24956_24970;
var G__24976 = (i__24957_24971 + (1));
seq__24954_24968 = G__24973;
chunk__24955_24969 = G__24974;
count__24956_24970 = G__24975;
i__24957_24971 = G__24976;
continue;
} else {
var temp__4425__auto___24977 = cljs.core.seq.call(null,seq__24954_24968);
if(temp__4425__auto___24977){
var seq__24954_24978__$1 = temp__4425__auto___24977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24954_24978__$1)){
var c__17635__auto___24979 = cljs.core.chunk_first.call(null,seq__24954_24978__$1);
var G__24980 = cljs.core.chunk_rest.call(null,seq__24954_24978__$1);
var G__24981 = c__17635__auto___24979;
var G__24982 = cljs.core.count.call(null,c__17635__auto___24979);
var G__24983 = (0);
seq__24954_24968 = G__24980;
chunk__24955_24969 = G__24981;
count__24956_24970 = G__24982;
i__24957_24971 = G__24983;
continue;
} else {
var f_24984 = cljs.core.first.call(null,seq__24954_24978__$1);
cljs.core.println.call(null,"  ",f_24984);

var G__24985 = cljs.core.next.call(null,seq__24954_24978__$1);
var G__24986 = null;
var G__24987 = (0);
var G__24988 = (0);
seq__24954_24968 = G__24985;
chunk__24955_24969 = G__24986;
count__24956_24970 = G__24987;
i__24957_24971 = G__24988;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24989 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16832__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24989);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24989)))?cljs.core.second.call(null,arglists_24989):arglists_24989));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24959 = null;
var count__24960 = (0);
var i__24961 = (0);
while(true){
if((i__24961 < count__24960)){
var vec__24962 = cljs.core._nth.call(null,chunk__24959,i__24961);
var name = cljs.core.nth.call(null,vec__24962,(0),null);
var map__24963 = cljs.core.nth.call(null,vec__24962,(1),null);
var map__24963__$1 = ((((!((map__24963 == null)))?((((map__24963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24963):map__24963);
var doc = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24990 = seq__24958;
var G__24991 = chunk__24959;
var G__24992 = count__24960;
var G__24993 = (i__24961 + (1));
seq__24958 = G__24990;
chunk__24959 = G__24991;
count__24960 = G__24992;
i__24961 = G__24993;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24958);
if(temp__4425__auto__){
var seq__24958__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24958__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__24958__$1);
var G__24994 = cljs.core.chunk_rest.call(null,seq__24958__$1);
var G__24995 = c__17635__auto__;
var G__24996 = cljs.core.count.call(null,c__17635__auto__);
var G__24997 = (0);
seq__24958 = G__24994;
chunk__24959 = G__24995;
count__24960 = G__24996;
i__24961 = G__24997;
continue;
} else {
var vec__24965 = cljs.core.first.call(null,seq__24958__$1);
var name = cljs.core.nth.call(null,vec__24965,(0),null);
var map__24966 = cljs.core.nth.call(null,vec__24965,(1),null);
var map__24966__$1 = ((((!((map__24966 == null)))?((((map__24966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24966):map__24966);
var doc = cljs.core.get.call(null,map__24966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24998 = cljs.core.next.call(null,seq__24958__$1);
var G__24999 = null;
var G__25000 = (0);
var G__25001 = (0);
seq__24958 = G__24998;
chunk__24959 = G__24999;
count__24960 = G__25000;
i__24961 = G__25001;
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
});

//# sourceMappingURL=repl.js.map