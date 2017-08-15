// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('datascript.db');

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
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31676,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31678 = (((k31676 instanceof cljs.core.Keyword))?k31676.fqn:null);
switch (G__31678) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31676,else__17449__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31675){
var self__ = this;
var G__31675__$1 = this;
return (new cljs.core.RecordIter((0),G__31675__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31675){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31679 = cljs.core.keyword_identical_QMARK_;
var expr__31680 = k__17454__auto__;
if(cljs.core.truth_(pred__31679.call(null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__31680))){
return (new datascript.pull_parser.PullSpec(G__31675,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31679.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__31680))){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__31675,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31675),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31675){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__31675,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"wildcard?","wildcard?",954487426,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__31677){
return (new datascript.pull_parser.PullSpec(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(G__31677),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__31677),null,cljs.core.dissoc.call(null,G__31677,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__17487__auto__ = (((this$ == null))?null:this$);
var m__17488__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,this$);
} else {
var m__17488__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPullSpecComponent.-as-spec",this$);
}
}
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31684,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31686 = (((k31684 instanceof cljs.core.Keyword))?k31684.fqn:null);
switch (G__31686) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31684,else__17449__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31683){
var self__ = this;
var G__31683__$1 = this;
return (new cljs.core.RecordIter((0),G__31683__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31683){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31687 = cljs.core.keyword_identical_QMARK_;
var expr__31688 = k__17454__auto__;
if(cljs.core.truth_(pred__31687.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__31688))){
return (new datascript.pull_parser.PullAttrName(G__31683,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31683),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31683){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__31683,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null)], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__31685){
return (new datascript.pull_parser.PullAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__31685),null,cljs.core.dissoc.call(null,G__31685,new cljs.core.Keyword(null,"attr","attr",-604132353)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31692,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31694 = (((k31692 instanceof cljs.core.Keyword))?k31692.fqn:null);
switch (G__31694) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31692,else__17449__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31691){
var self__ = this;
var G__31691__$1 = this;
return (new cljs.core.RecordIter((0),G__31691__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rattr","rattr",-1122345563),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31691){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31695 = cljs.core.keyword_identical_QMARK_;
var expr__31696 = k__17454__auto__;
if(cljs.core.truth_(pred__31695.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__31696))){
return (new datascript.pull_parser.PullReverseAttrName(G__31691,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31695.call(null,new cljs.core.Keyword(null,"rattr","rattr",-1122345563),expr__31696))){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__31691,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31691),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rattr","rattr",-1122345563),self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31691){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__31691,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"rattr","rattr",518185964,null)], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__31693){
return (new datascript.pull_parser.PullReverseAttrName(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__31693),new cljs.core.Keyword(null,"rattr","rattr",-1122345563).cljs$core$IFn$_invoke$arity$1(G__31693),null,cljs.core.dissoc.call(null,G__31693,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"rattr","rattr",-1122345563)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31700,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31702 = (((k31700 instanceof cljs.core.Keyword))?k31700.fqn:null);
switch (G__31702) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31700,else__17449__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31699){
var self__ = this;
var G__31699__$1 = this;
return (new cljs.core.RecordIter((0),G__31699__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31699){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31703 = cljs.core.keyword_identical_QMARK_;
var expr__31704 = k__17454__auto__;
if(cljs.core.truth_(pred__31703.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__31704))){
return (new datascript.pull_parser.PullLimitExpr(G__31699,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31703.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__31704))){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__31699,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31699),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31699){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__31699,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__31701){
return (new datascript.pull_parser.PullLimitExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__31701),new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__31701),null,cljs.core.dissoc.call(null,G__31701,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"limit","limit",-1355822363)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31708,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31710 = (((k31708 instanceof cljs.core.Keyword))?k31708.fqn:null);
switch (G__31710) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31708,else__17449__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31707){
var self__ = this;
var G__31707__$1 = this;
return (new cljs.core.RecordIter((0),G__31707__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"default","default",-1987822328)], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31707){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31711 = cljs.core.keyword_identical_QMARK_;
var expr__31712 = k__17454__auto__;
if(cljs.core.truth_(pred__31711.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__31712))){
return (new datascript.pull_parser.PullDefaultExpr(G__31707,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31711.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__31712))){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__31707,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31707),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31707){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__31707,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__31709){
return (new datascript.pull_parser.PullDefaultExpr(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__31709),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__31709),null,cljs.core.dissoc.call(null,G__31709,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"value","value",305978217)),null));
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
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31716,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31718 = k31716;
switch (G__31718) {
default:
return cljs.core.get.call(null,self__.__extmap,k31716,else__17449__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31715){
var self__ = this;
var G__31715__$1 = this;
return (new cljs.core.RecordIter((0),G__31715__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31715){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31719 = cljs.core.keyword_identical_QMARK_;
var expr__31720 = k__17454__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31715),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31715){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__31715,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__31717){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.dissoc.call(null,G__31717),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31724,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31726 = (((k31724 instanceof cljs.core.Keyword))?k31724.fqn:null);
switch (G__31726) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31724,else__17449__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31723){
var self__ = this;
var G__31723__$1 = this;
return (new cljs.core.RecordIter((0),G__31723__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit","limit",-1355822363),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31723){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31727 = cljs.core.keyword_identical_QMARK_;
var expr__31728 = k__17454__auto__;
if(cljs.core.truth_(pred__31727.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__31728))){
return (new datascript.pull_parser.PullRecursionLimit(G__31723,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31723),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31723){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__31723,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__31725){
return (new datascript.pull_parser.PullRecursionLimit(new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__31725),null,cljs.core.dissoc.call(null,G__31725,new cljs.core.Keyword(null,"limit","limit",-1355822363)),null));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31732,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31734 = (((k31732 instanceof cljs.core.Keyword))?k31732.fqn:null);
switch (G__31734) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31732,else__17449__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31731){
var self__ = this;
var G__31731__$1 = this;
return (new cljs.core.RecordIter((0),G__31731__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.call(null,datascript.pull_parser._as_spec.call(null,self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec.call(null,self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"porrl","porrl",-1693905102),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31731){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31735 = cljs.core.keyword_identical_QMARK_;
var expr__31736 = k__17454__auto__;
if(cljs.core.truth_(pred__31735.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__31736))){
return (new datascript.pull_parser.PullMapSpecEntry(G__31731,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31735.call(null,new cljs.core.Keyword(null,"porrl","porrl",-1693905102),expr__31736))){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__31731,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31731),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"porrl","porrl",-1693905102),self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31731){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__31731,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"porrl","porrl",-53373575,null)], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__31733){
return (new datascript.pull_parser.PullMapSpecEntry(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__31733),new cljs.core.Keyword(null,"porrl","porrl",-1693905102).cljs$core$IFn$_invoke$arity$1(G__31733),null,cljs.core.dissoc.call(null,G__31733,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"porrl","porrl",-1693905102)),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);
} else {
return cljs.core.update.call(null,res,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.conj_BANG_,datascript.pull_parser._as_spec.call(null,part));
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
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17446__auto__,k__17447__auto__){
var self__ = this;
var this__17446__auto____$1 = this;
return cljs.core._lookup.call(null,this__17446__auto____$1,k__17447__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17448__auto__,k31740,else__17449__auto__){
var self__ = this;
var this__17448__auto____$1 = this;
var G__31742 = (((k31740 instanceof cljs.core.Keyword))?k31740.fqn:null);
switch (G__31742) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31740,else__17449__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17460__auto__,writer__17461__auto__,opts__17462__auto__){
var self__ = this;
var this__17460__auto____$1 = this;
var pr_pair__17463__auto__ = ((function (this__17460__auto____$1){
return (function (keyval__17464__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,cljs.core.pr_writer,""," ","",opts__17462__auto__,keyval__17464__auto__);
});})(this__17460__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17461__auto__,pr_pair__17463__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__17462__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$ = true;

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31739){
var self__ = this;
var G__31739__$1 = this;
return (new cljs.core.RecordIter((0),G__31739__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"specs","specs",1426570741)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17444__auto__){
var self__ = this;
var this__17444__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17440__auto__){
var self__ = this;
var this__17440__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17450__auto__){
var self__ = this;
var this__17450__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17441__auto__){
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

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17442__auto__,other__17443__auto__){
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

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = true;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.call(null,datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subpattern","subpattern",45002743),cljs.core.update.call(null,spec,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17455__auto__,k__17456__auto__){
var self__ = this;
var this__17455__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"specs","specs",1426570741),null], null), null),k__17456__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17455__auto____$1),self__.__meta),k__17456__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17456__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17453__auto__,k__17454__auto__,G__31739){
var self__ = this;
var this__17453__auto____$1 = this;
var pred__31743 = cljs.core.keyword_identical_QMARK_;
var expr__31744 = k__17454__auto__;
if(cljs.core.truth_(pred__31743.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741),expr__31744))){
return (new datascript.pull_parser.PullPattern(G__31739,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17454__auto__,G__31739),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17458__auto__){
var self__ = this;
var this__17458__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specs","specs",1426570741),self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17445__auto__,G__31739){
var self__ = this;
var this__17445__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__31739,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17451__auto__,entry__17452__auto__){
var self__ = this;
var this__17451__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17452__auto__)){
return cljs.core._assoc.call(null,this__17451__auto____$1,cljs.core._nth.call(null,entry__17452__auto__,(0)),cljs.core._nth.call(null,entry__17452__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17451__auto____$1,entry__17452__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"specs","specs",-1227865028,null)], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__17480__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__17480__auto__,writer__17481__auto__){
return cljs.core._write.call(null,writer__17481__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__31741){
return (new datascript.pull_parser.PullPattern(new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(G__31741),null,cljs.core.dissoc.call(null,G__31741,new cljs.core.Keyword(null,"specs","specs",1426570741)),null));
});

datascript.pull_parser.parse_pattern;
datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"*","*",-1294732318),null,"*",null,new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_.call(null,spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref.call(null,spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_(datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_.call(null,spec)) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,new cljs.core.Keyword(null,"limit","limit",-1355822363),null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__31748 = spec;
var limit_sym = cljs.core.nth.call(null,vec__31748,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__31748,(1),null);
var pos_num = cljs.core.nth.call(null,vec__31748,(2),null);
if(cljs.core.truth_(datascript.pull_parser.limit_QMARK_.call(null,limit_sym))){
var temp__4423__auto__ = (function (){var and__16820__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__16820__auto__){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected [\"limit\" attr-name (positive-number | nil)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__31750 = spec;
var default_sym = cljs.core.nth.call(null,vec__31750,(0),null);
var attr_name_spec = cljs.core.nth.call(null,vec__31750,(1),null);
var default_val = cljs.core.nth.call(null,vec__31750,(2),null);
if(cljs.core.truth_(datascript.pull_parser.default_QMARK_.call(null,default_sym))){
var temp__4423__auto__ = (function (){var and__16820__auto__ = datascript.pull_parser.default_QMARK_.call(null,default_sym);
if(cljs.core.truth_(and__16820__auto__)){
return datascript.pull_parser.parse_attr_name.call(null,attr_name_spec);
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected [\"default\" attr-name any-value]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__31751){
var vec__31753 = p__31751;
var k = cljs.core.nth.call(null,vec__31753,(0),null);
var v = cljs.core.nth.call(null,vec__31753,(1),null);
var temp__4423__auto__ = (function (){var or__16832__auto__ = datascript.pull_parser.parse_attr_name.call(null,k);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,k))){
return datascript.pull_parser.parse_limit_expr.call(null,k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var attr_name = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__16832__auto__ = datascript.pull_parser.parse_recursion_limit.call(null,v);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return datascript.pull_parser.parse_pattern.call(null,v);
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var pattern_or_rec = temp__4423__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected (pattern | recursion-limit)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected (attr-name | limit-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_.call(null,spec)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,spec))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Maps should contain exactly 1 entry"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null)))))].join('')));
}

return datascript.pull_parser.parse_map_spec_entry.call(null,cljs.core.first.call(null,spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_.call(null,spec))){
var or__16832__auto__ = datascript.pull_parser.parse_limit_expr.call(null,spec);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return datascript.pull_parser.parse_default_expr.call(null,spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__16832__auto__ = datascript.pull_parser.parse_attr_name.call(null,spec);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = datascript.pull_parser.parse_wildcard.call(null,spec);
if(cljs.core.truth_(or__16832__auto____$1)){
return or__16832__auto____$1;
} else {
var or__16832__auto____$2 = datascript.pull_parser.parse_map_spec.call(null,spec);
if(cljs.core.truth_(or__16832__auto____$2)){
return or__16832__auto____$2;
} else {
var or__16832__auto____$3 = datascript.pull_parser.parse_attr_expr.call(null,spec);
if(cljs.core.truth_(or__16832__auto____$3)){
return or__16832__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_.call(null,clause)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.truth_(datascript.pull_parser.wildcard_QMARK_.call(null,clause))){
return new cljs.core.Keyword(null,"wildcard","wildcard",-622473020);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__31754_SHARP_){
return cljs.core.conj.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__31754_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by.call(null,datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"wildcard","wildcard",-622473020))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.call(null,cljs.core.into.call(null,base,cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"other","other",995793544))),cljs.core.mapcat.call(null,datascript.pull_parser.expand_map_clause),cljs.core.get.call(null,groups,new cljs.core.Keyword(null,"map","map",1371690461)));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_.call(null,pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses.call(null,pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.call(null,datascript.pull_parser._as_spec.call(null,pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__16832__auto__ = (function (){var G__31758 = pattern;
var G__31758__$1 = (((G__31758 == null))?null:datascript.pull_parser.parse_pattern.call(null,G__31758));
var G__31758__$2 = (((G__31758__$1 == null))?null:datascript.pull_parser.pattern__GT_spec.call(null,G__31758__$1));
return G__31758__$2;
})();
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull pattern, expected: [attr-spec+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),pattern], null));
}
});

//# sourceMappingURL=pull_parser.js.map