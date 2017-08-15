// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__24790_24794 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__24791_24795 = null;
var count__24792_24796 = (0);
var i__24793_24797 = (0);
while(true){
if((i__24793_24797 < count__24792_24796)){
var k_24798 = cljs.core._nth.call(null,chunk__24791_24795,i__24793_24797);
var v_24799 = (b[k_24798]);
(a[k_24798] = v_24799);

var G__24800 = seq__24790_24794;
var G__24801 = chunk__24791_24795;
var G__24802 = count__24792_24796;
var G__24803 = (i__24793_24797 + (1));
seq__24790_24794 = G__24800;
chunk__24791_24795 = G__24801;
count__24792_24796 = G__24802;
i__24793_24797 = G__24803;
continue;
} else {
var temp__4425__auto___24804 = cljs.core.seq.call(null,seq__24790_24794);
if(temp__4425__auto___24804){
var seq__24790_24805__$1 = temp__4425__auto___24804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24790_24805__$1)){
var c__17635__auto___24806 = cljs.core.chunk_first.call(null,seq__24790_24805__$1);
var G__24807 = cljs.core.chunk_rest.call(null,seq__24790_24805__$1);
var G__24808 = c__17635__auto___24806;
var G__24809 = cljs.core.count.call(null,c__17635__auto___24806);
var G__24810 = (0);
seq__24790_24794 = G__24807;
chunk__24791_24795 = G__24808;
count__24792_24796 = G__24809;
i__24793_24797 = G__24810;
continue;
} else {
var k_24811 = cljs.core.first.call(null,seq__24790_24805__$1);
var v_24812 = (b[k_24811]);
(a[k_24811] = v_24812);

var G__24813 = cljs.core.next.call(null,seq__24790_24805__$1);
var G__24814 = null;
var G__24815 = (0);
var G__24816 = (0);
seq__24790_24794 = G__24813;
chunk__24791_24795 = G__24814;
count__24792_24796 = G__24815;
i__24793_24797 = G__24816;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args24817 = [];
var len__17890__auto___24820 = arguments.length;
var i__17891__auto___24821 = (0);
while(true){
if((i__17891__auto___24821 < len__17890__auto___24820)){
args24817.push((arguments[i__17891__auto___24821]));

var G__24822 = (i__17891__auto___24821 + (1));
i__17891__auto___24821 = G__24822;
continue;
} else {
}
break;
}

var G__24819 = args24817.length;
switch (G__24819) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24817.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24824 = (i + (2));
var G__24825 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24824;
ret = G__24825;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24826_24830 = cljs.core.seq.call(null,v);
var chunk__24827_24831 = null;
var count__24828_24832 = (0);
var i__24829_24833 = (0);
while(true){
if((i__24829_24833 < count__24828_24832)){
var x_24834 = cljs.core._nth.call(null,chunk__24827_24831,i__24829_24833);
ret.push(x_24834);

var G__24835 = seq__24826_24830;
var G__24836 = chunk__24827_24831;
var G__24837 = count__24828_24832;
var G__24838 = (i__24829_24833 + (1));
seq__24826_24830 = G__24835;
chunk__24827_24831 = G__24836;
count__24828_24832 = G__24837;
i__24829_24833 = G__24838;
continue;
} else {
var temp__4425__auto___24839 = cljs.core.seq.call(null,seq__24826_24830);
if(temp__4425__auto___24839){
var seq__24826_24840__$1 = temp__4425__auto___24839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24826_24840__$1)){
var c__17635__auto___24841 = cljs.core.chunk_first.call(null,seq__24826_24840__$1);
var G__24842 = cljs.core.chunk_rest.call(null,seq__24826_24840__$1);
var G__24843 = c__17635__auto___24841;
var G__24844 = cljs.core.count.call(null,c__17635__auto___24841);
var G__24845 = (0);
seq__24826_24830 = G__24842;
chunk__24827_24831 = G__24843;
count__24828_24832 = G__24844;
i__24829_24833 = G__24845;
continue;
} else {
var x_24846 = cljs.core.first.call(null,seq__24826_24840__$1);
ret.push(x_24846);

var G__24847 = cljs.core.next.call(null,seq__24826_24840__$1);
var G__24848 = null;
var G__24849 = (0);
var G__24850 = (0);
seq__24826_24830 = G__24847;
chunk__24827_24831 = G__24848;
count__24828_24832 = G__24849;
i__24829_24833 = G__24850;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24851_24855 = cljs.core.seq.call(null,v);
var chunk__24852_24856 = null;
var count__24853_24857 = (0);
var i__24854_24858 = (0);
while(true){
if((i__24854_24858 < count__24853_24857)){
var x_24859 = cljs.core._nth.call(null,chunk__24852_24856,i__24854_24858);
ret.push(x_24859);

var G__24860 = seq__24851_24855;
var G__24861 = chunk__24852_24856;
var G__24862 = count__24853_24857;
var G__24863 = (i__24854_24858 + (1));
seq__24851_24855 = G__24860;
chunk__24852_24856 = G__24861;
count__24853_24857 = G__24862;
i__24854_24858 = G__24863;
continue;
} else {
var temp__4425__auto___24864 = cljs.core.seq.call(null,seq__24851_24855);
if(temp__4425__auto___24864){
var seq__24851_24865__$1 = temp__4425__auto___24864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24851_24865__$1)){
var c__17635__auto___24866 = cljs.core.chunk_first.call(null,seq__24851_24865__$1);
var G__24867 = cljs.core.chunk_rest.call(null,seq__24851_24865__$1);
var G__24868 = c__17635__auto___24866;
var G__24869 = cljs.core.count.call(null,c__17635__auto___24866);
var G__24870 = (0);
seq__24851_24855 = G__24867;
chunk__24852_24856 = G__24868;
count__24853_24857 = G__24869;
i__24854_24858 = G__24870;
continue;
} else {
var x_24871 = cljs.core.first.call(null,seq__24851_24865__$1);
ret.push(x_24871);

var G__24872 = cljs.core.next.call(null,seq__24851_24865__$1);
var G__24873 = null;
var G__24874 = (0);
var G__24875 = (0);
seq__24851_24855 = G__24872;
chunk__24852_24856 = G__24873;
count__24853_24857 = G__24874;
i__24854_24858 = G__24875;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24876_24880 = cljs.core.seq.call(null,v);
var chunk__24877_24881 = null;
var count__24878_24882 = (0);
var i__24879_24883 = (0);
while(true){
if((i__24879_24883 < count__24878_24882)){
var x_24884 = cljs.core._nth.call(null,chunk__24877_24881,i__24879_24883);
ret.push(x_24884);

var G__24885 = seq__24876_24880;
var G__24886 = chunk__24877_24881;
var G__24887 = count__24878_24882;
var G__24888 = (i__24879_24883 + (1));
seq__24876_24880 = G__24885;
chunk__24877_24881 = G__24886;
count__24878_24882 = G__24887;
i__24879_24883 = G__24888;
continue;
} else {
var temp__4425__auto___24889 = cljs.core.seq.call(null,seq__24876_24880);
if(temp__4425__auto___24889){
var seq__24876_24890__$1 = temp__4425__auto___24889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24876_24890__$1)){
var c__17635__auto___24891 = cljs.core.chunk_first.call(null,seq__24876_24890__$1);
var G__24892 = cljs.core.chunk_rest.call(null,seq__24876_24890__$1);
var G__24893 = c__17635__auto___24891;
var G__24894 = cljs.core.count.call(null,c__17635__auto___24891);
var G__24895 = (0);
seq__24876_24880 = G__24892;
chunk__24877_24881 = G__24893;
count__24878_24882 = G__24894;
i__24879_24883 = G__24895;
continue;
} else {
var x_24896 = cljs.core.first.call(null,seq__24876_24890__$1);
ret.push(x_24896);

var G__24897 = cljs.core.next.call(null,seq__24876_24890__$1);
var G__24898 = null;
var G__24899 = (0);
var G__24900 = (0);
seq__24876_24880 = G__24897;
chunk__24877_24881 = G__24898;
count__24878_24882 = G__24899;
i__24879_24883 = G__24900;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24901 = [];
var len__17890__auto___24912 = arguments.length;
var i__17891__auto___24913 = (0);
while(true){
if((i__17891__auto___24913 < len__17890__auto___24912)){
args24901.push((arguments[i__17891__auto___24913]));

var G__24914 = (i__17891__auto___24913 + (1));
i__17891__auto___24913 = G__24914;
continue;
} else {
}
break;
}

var G__24903 = args24901.length;
switch (G__24903) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24901.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24904 = obj;
G__24904.push(kfn.call(null,k),vfn.call(null,v));

return G__24904;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24905 = cljs.core.clone.call(null,handlers);
x24905.forEach = ((function (x24905,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24906 = cljs.core.seq.call(null,coll);
var chunk__24907 = null;
var count__24908 = (0);
var i__24909 = (0);
while(true){
if((i__24909 < count__24908)){
var vec__24910 = cljs.core._nth.call(null,chunk__24907,i__24909);
var k = cljs.core.nth.call(null,vec__24910,(0),null);
var v = cljs.core.nth.call(null,vec__24910,(1),null);
f.call(null,v,k);

var G__24916 = seq__24906;
var G__24917 = chunk__24907;
var G__24918 = count__24908;
var G__24919 = (i__24909 + (1));
seq__24906 = G__24916;
chunk__24907 = G__24917;
count__24908 = G__24918;
i__24909 = G__24919;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24906);
if(temp__4425__auto__){
var seq__24906__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24906__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__24906__$1);
var G__24920 = cljs.core.chunk_rest.call(null,seq__24906__$1);
var G__24921 = c__17635__auto__;
var G__24922 = cljs.core.count.call(null,c__17635__auto__);
var G__24923 = (0);
seq__24906 = G__24920;
chunk__24907 = G__24921;
count__24908 = G__24922;
i__24909 = G__24923;
continue;
} else {
var vec__24911 = cljs.core.first.call(null,seq__24906__$1);
var k = cljs.core.nth.call(null,vec__24911,(0),null);
var v = cljs.core.nth.call(null,vec__24911,(1),null);
f.call(null,v,k);

var G__24924 = cljs.core.next.call(null,seq__24906__$1);
var G__24925 = null;
var G__24926 = (0);
var G__24927 = (0);
seq__24906 = G__24924;
chunk__24907 = G__24925;
count__24908 = G__24926;
i__24909 = G__24927;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24905,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24905;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24928 = [];
var len__17890__auto___24934 = arguments.length;
var i__17891__auto___24935 = (0);
while(true){
if((i__17891__auto___24935 < len__17890__auto___24934)){
args24928.push((arguments[i__17891__auto___24935]));

var G__24936 = (i__17891__auto___24935 + (1));
i__17891__auto___24935 = G__24936;
continue;
} else {
}
break;
}

var G__24930 = args24928.length;
switch (G__24930) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24928.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24931 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24932){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24932 = meta24932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24933,meta24932__$1){
var self__ = this;
var _24933__$1 = this;
return (new cognitect.transit.t_cognitect$transit24931(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24932__$1));
});

cognitect.transit.t_cognitect$transit24931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24933){
var self__ = this;
var _24933__$1 = this;
return self__.meta24932;
});

cognitect.transit.t_cognitect$transit24931.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24931.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24931.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24931.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24932","meta24932",-1604639357,null)], null);
});

cognitect.transit.t_cognitect$transit24931.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24931.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24931";

cognitect.transit.t_cognitect$transit24931.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cognitect.transit/t_cognitect$transit24931");
});

cognitect.transit.__GT_t_cognitect$transit24931 = (function cognitect$transit$__GT_t_cognitect$transit24931(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24932){
return (new cognitect.transit.t_cognitect$transit24931(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24932));
});

}

return (new cognitect.transit.t_cognitect$transit24931(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16832__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map