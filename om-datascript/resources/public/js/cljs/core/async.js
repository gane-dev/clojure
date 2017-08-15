// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20878 = [];
var len__17890__auto___20884 = arguments.length;
var i__17891__auto___20885 = (0);
while(true){
if((i__17891__auto___20885 < len__17890__auto___20884)){
args20878.push((arguments[i__17891__auto___20885]));

var G__20886 = (i__17891__auto___20885 + (1));
i__17891__auto___20885 = G__20886;
continue;
} else {
}
break;
}

var G__20880 = args20878.length;
switch (G__20880) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20878.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20881 = (function (f,blockable,meta20882){
this.f = f;
this.blockable = blockable;
this.meta20882 = meta20882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20883,meta20882__$1){
var self__ = this;
var _20883__$1 = this;
return (new cljs.core.async.t_cljs$core$async20881(self__.f,self__.blockable,meta20882__$1));
});

cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20883){
var self__ = this;
var _20883__$1 = this;
return self__.meta20882;
});

cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20882","meta20882",-2029077316,null)], null);
});

cljs.core.async.t_cljs$core$async20881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20881";

cljs.core.async.t_cljs$core$async20881.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async20881");
});

cljs.core.async.__GT_t_cljs$core$async20881 = (function cljs$core$async$__GT_t_cljs$core$async20881(f__$1,blockable__$1,meta20882){
return (new cljs.core.async.t_cljs$core$async20881(f__$1,blockable__$1,meta20882));
});

}

return (new cljs.core.async.t_cljs$core$async20881(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20890 = [];
var len__17890__auto___20893 = arguments.length;
var i__17891__auto___20894 = (0);
while(true){
if((i__17891__auto___20894 < len__17890__auto___20893)){
args20890.push((arguments[i__17891__auto___20894]));

var G__20895 = (i__17891__auto___20894 + (1));
i__17891__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var G__20892 = args20890.length;
switch (G__20892) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20890.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20897 = [];
var len__17890__auto___20900 = arguments.length;
var i__17891__auto___20901 = (0);
while(true){
if((i__17891__auto___20901 < len__17890__auto___20900)){
args20897.push((arguments[i__17891__auto___20901]));

var G__20902 = (i__17891__auto___20901 + (1));
i__17891__auto___20901 = G__20902;
continue;
} else {
}
break;
}

var G__20899 = args20897.length;
switch (G__20899) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20897.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20904 = [];
var len__17890__auto___20907 = arguments.length;
var i__17891__auto___20908 = (0);
while(true){
if((i__17891__auto___20908 < len__17890__auto___20907)){
args20904.push((arguments[i__17891__auto___20908]));

var G__20909 = (i__17891__auto___20908 + (1));
i__17891__auto___20908 = G__20909;
continue;
} else {
}
break;
}

var G__20906 = args20904.length;
switch (G__20906) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20904.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20911 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20911);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20911,ret){
return (function (){
return fn1.call(null,val_20911);
});})(val_20911,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20912 = [];
var len__17890__auto___20915 = arguments.length;
var i__17891__auto___20916 = (0);
while(true){
if((i__17891__auto___20916 < len__17890__auto___20915)){
args20912.push((arguments[i__17891__auto___20916]));

var G__20917 = (i__17891__auto___20916 + (1));
i__17891__auto___20916 = G__20917;
continue;
} else {
}
break;
}

var G__20914 = args20912.length;
switch (G__20914) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20912.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17735__auto___20919 = n;
var x_20920 = (0);
while(true){
if((x_20920 < n__17735__auto___20919)){
(a[x_20920] = (0));

var G__20921 = (x_20920 + (1));
x_20920 = G__20921;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20922 = (i + (1));
i = G__20922;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20926 = (function (alt_flag,flag,meta20927){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20927 = meta20927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20928,meta20927__$1){
var self__ = this;
var _20928__$1 = this;
return (new cljs.core.async.t_cljs$core$async20926(self__.alt_flag,self__.flag,meta20927__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20928){
var self__ = this;
var _20928__$1 = this;
return self__.meta20927;
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20927","meta20927",-1718369312,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20926";

cljs.core.async.t_cljs$core$async20926.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async20926");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20926 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20926(alt_flag__$1,flag__$1,meta20927){
return (new cljs.core.async.t_cljs$core$async20926(alt_flag__$1,flag__$1,meta20927));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20926(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20932 = (function (alt_handler,flag,cb,meta20933){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20933 = meta20933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20934,meta20933__$1){
var self__ = this;
var _20934__$1 = this;
return (new cljs.core.async.t_cljs$core$async20932(self__.alt_handler,self__.flag,self__.cb,meta20933__$1));
});

cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20934){
var self__ = this;
var _20934__$1 = this;
return self__.meta20933;
});

cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20933","meta20933",908179893,null)], null);
});

cljs.core.async.t_cljs$core$async20932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20932";

cljs.core.async.t_cljs$core$async20932.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async20932");
});

cljs.core.async.__GT_t_cljs$core$async20932 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20932(alt_handler__$1,flag__$1,cb__$1,meta20933){
return (new cljs.core.async.t_cljs$core$async20932(alt_handler__$1,flag__$1,cb__$1,meta20933));
});

}

return (new cljs.core.async.t_cljs$core$async20932(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20935_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20935_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20936_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20936_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16832__auto__ = wport;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20937 = (i + (1));
i = G__20937;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16832__auto__ = ret;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16820__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16820__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17897__auto__ = [];
var len__17890__auto___20943 = arguments.length;
var i__17891__auto___20944 = (0);
while(true){
if((i__17891__auto___20944 < len__17890__auto___20943)){
args__17897__auto__.push((arguments[i__17891__auto___20944]));

var G__20945 = (i__17891__auto___20944 + (1));
i__17891__auto___20944 = G__20945;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((1) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17898__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20940){
var map__20941 = p__20940;
var map__20941__$1 = ((((!((map__20941 == null)))?((((map__20941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20941):map__20941);
var opts = map__20941__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20938){
var G__20939 = cljs.core.first.call(null,seq20938);
var seq20938__$1 = cljs.core.next.call(null,seq20938);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20939,seq20938__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20946 = [];
var len__17890__auto___20996 = arguments.length;
var i__17891__auto___20997 = (0);
while(true){
if((i__17891__auto___20997 < len__17890__auto___20996)){
args20946.push((arguments[i__17891__auto___20997]));

var G__20998 = (i__17891__auto___20997 + (1));
i__17891__auto___20997 = G__20998;
continue;
} else {
}
break;
}

var G__20948 = args20946.length;
switch (G__20948) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20946.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20833__auto___21000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___21000){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___21000){
return (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (7))){
var inst_20968 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20974_21001 = state_20972__$1;
(statearr_20974_21001[(2)] = inst_20968);

(statearr_20974_21001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (1))){
var state_20972__$1 = state_20972;
var statearr_20975_21002 = state_20972__$1;
(statearr_20975_21002[(2)] = null);

(statearr_20975_21002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (4))){
var inst_20951 = (state_20972[(7)]);
var inst_20951__$1 = (state_20972[(2)]);
var inst_20952 = (inst_20951__$1 == null);
var state_20972__$1 = (function (){var statearr_20976 = state_20972;
(statearr_20976[(7)] = inst_20951__$1);

return statearr_20976;
})();
if(cljs.core.truth_(inst_20952)){
var statearr_20977_21003 = state_20972__$1;
(statearr_20977_21003[(1)] = (5));

} else {
var statearr_20978_21004 = state_20972__$1;
(statearr_20978_21004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (13))){
var state_20972__$1 = state_20972;
var statearr_20979_21005 = state_20972__$1;
(statearr_20979_21005[(2)] = null);

(statearr_20979_21005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (6))){
var inst_20951 = (state_20972[(7)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20972__$1,(11),to,inst_20951);
} else {
if((state_val_20973 === (3))){
var inst_20970 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20972__$1,inst_20970);
} else {
if((state_val_20973 === (12))){
var state_20972__$1 = state_20972;
var statearr_20980_21006 = state_20972__$1;
(statearr_20980_21006[(2)] = null);

(statearr_20980_21006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (2))){
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(4),from);
} else {
if((state_val_20973 === (11))){
var inst_20961 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
if(cljs.core.truth_(inst_20961)){
var statearr_20981_21007 = state_20972__$1;
(statearr_20981_21007[(1)] = (12));

} else {
var statearr_20982_21008 = state_20972__$1;
(statearr_20982_21008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (9))){
var state_20972__$1 = state_20972;
var statearr_20983_21009 = state_20972__$1;
(statearr_20983_21009[(2)] = null);

(statearr_20983_21009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (5))){
var state_20972__$1 = state_20972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20984_21010 = state_20972__$1;
(statearr_20984_21010[(1)] = (8));

} else {
var statearr_20985_21011 = state_20972__$1;
(statearr_20985_21011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (14))){
var inst_20966 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20986_21012 = state_20972__$1;
(statearr_20986_21012[(2)] = inst_20966);

(statearr_20986_21012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (10))){
var inst_20958 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20987_21013 = state_20972__$1;
(statearr_20987_21013[(2)] = inst_20958);

(statearr_20987_21013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (8))){
var inst_20955 = cljs.core.async.close_BANG_.call(null,to);
var state_20972__$1 = state_20972;
var statearr_20988_21014 = state_20972__$1;
(statearr_20988_21014[(2)] = inst_20955);

(statearr_20988_21014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__20833__auto___21000))
;
return ((function (switch__20721__auto__,c__20833__auto___21000){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_20992 = [null,null,null,null,null,null,null,null];
(statearr_20992[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_20992[(1)] = (1));

return statearr_20992;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_20972){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_20972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e20993){if((e20993 instanceof Object)){
var ex__20725__auto__ = e20993;
var statearr_20994_21015 = state_20972;
(statearr_20994_21015[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21016 = state_20972;
state_20972 = G__21016;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___21000))
})();
var state__20835__auto__ = (function (){var statearr_20995 = f__20834__auto__.call(null);
(statearr_20995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21000);

return statearr_20995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___21000))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21200){
var vec__21201 = p__21200;
var v = cljs.core.nth.call(null,vec__21201,(0),null);
var p = cljs.core.nth.call(null,vec__21201,(1),null);
var job = vec__21201;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20833__auto___21383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results){
return (function (state_21206){
var state_val_21207 = (state_21206[(1)]);
if((state_val_21207 === (1))){
var state_21206__$1 = state_21206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21206__$1,(2),res,v);
} else {
if((state_val_21207 === (2))){
var inst_21203 = (state_21206[(2)]);
var inst_21204 = cljs.core.async.close_BANG_.call(null,res);
var state_21206__$1 = (function (){var statearr_21208 = state_21206;
(statearr_21208[(7)] = inst_21203);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21206__$1,inst_21204);
} else {
return null;
}
}
});})(c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results))
;
return ((function (switch__20721__auto__,c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_21212 = [null,null,null,null,null,null,null,null];
(statearr_21212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__);

(statearr_21212[(1)] = (1));

return statearr_21212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1 = (function (state_21206){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21213){if((e21213 instanceof Object)){
var ex__20725__auto__ = e21213;
var statearr_21214_21384 = state_21206;
(statearr_21214_21384[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21385 = state_21206;
state_21206 = G__21385;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = function(state_21206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1.call(this,state_21206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results))
})();
var state__20835__auto__ = (function (){var statearr_21215 = f__20834__auto__.call(null);
(statearr_21215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21383);

return statearr_21215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___21383,res,vec__21201,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21216){
var vec__21217 = p__21216;
var v = cljs.core.nth.call(null,vec__21217,(0),null);
var p = cljs.core.nth.call(null,vec__21217,(1),null);
var job = vec__21217;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17735__auto___21386 = n;
var __21387 = (0);
while(true){
if((__21387 < n__17735__auto___21386)){
var G__21218_21388 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21218_21388) {
case "compute":
var c__20833__auto___21390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21387,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (__21387,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function (state_21231){
var state_val_21232 = (state_21231[(1)]);
if((state_val_21232 === (1))){
var state_21231__$1 = state_21231;
var statearr_21233_21391 = state_21231__$1;
(statearr_21233_21391[(2)] = null);

(statearr_21233_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (2))){
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21231__$1,(4),jobs);
} else {
if((state_val_21232 === (3))){
var inst_21229 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21231__$1,inst_21229);
} else {
if((state_val_21232 === (4))){
var inst_21221 = (state_21231[(2)]);
var inst_21222 = process.call(null,inst_21221);
var state_21231__$1 = state_21231;
if(cljs.core.truth_(inst_21222)){
var statearr_21234_21392 = state_21231__$1;
(statearr_21234_21392[(1)] = (5));

} else {
var statearr_21235_21393 = state_21231__$1;
(statearr_21235_21393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (5))){
var state_21231__$1 = state_21231;
var statearr_21236_21394 = state_21231__$1;
(statearr_21236_21394[(2)] = null);

(statearr_21236_21394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (6))){
var state_21231__$1 = state_21231;
var statearr_21237_21395 = state_21231__$1;
(statearr_21237_21395[(2)] = null);

(statearr_21237_21395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (7))){
var inst_21227 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
var statearr_21238_21396 = state_21231__$1;
(statearr_21238_21396[(2)] = inst_21227);

(statearr_21238_21396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21387,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
;
return ((function (__21387,switch__20721__auto__,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_21242 = [null,null,null,null,null,null,null];
(statearr_21242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__);

(statearr_21242[(1)] = (1));

return statearr_21242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1 = (function (state_21231){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21243){if((e21243 instanceof Object)){
var ex__20725__auto__ = e21243;
var statearr_21244_21397 = state_21231;
(statearr_21244_21397[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21398 = state_21231;
state_21231 = G__21398;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = function(state_21231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1.call(this,state_21231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__;
})()
;})(__21387,switch__20721__auto__,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
})();
var state__20835__auto__ = (function (){var statearr_21245 = f__20834__auto__.call(null);
(statearr_21245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21390);

return statearr_21245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(__21387,c__20833__auto___21390,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
);


break;
case "async":
var c__20833__auto___21399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21387,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (__21387,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function (state_21258){
var state_val_21259 = (state_21258[(1)]);
if((state_val_21259 === (1))){
var state_21258__$1 = state_21258;
var statearr_21260_21400 = state_21258__$1;
(statearr_21260_21400[(2)] = null);

(statearr_21260_21400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (2))){
var state_21258__$1 = state_21258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21258__$1,(4),jobs);
} else {
if((state_val_21259 === (3))){
var inst_21256 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21258__$1,inst_21256);
} else {
if((state_val_21259 === (4))){
var inst_21248 = (state_21258[(2)]);
var inst_21249 = async.call(null,inst_21248);
var state_21258__$1 = state_21258;
if(cljs.core.truth_(inst_21249)){
var statearr_21261_21401 = state_21258__$1;
(statearr_21261_21401[(1)] = (5));

} else {
var statearr_21262_21402 = state_21258__$1;
(statearr_21262_21402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (5))){
var state_21258__$1 = state_21258;
var statearr_21263_21403 = state_21258__$1;
(statearr_21263_21403[(2)] = null);

(statearr_21263_21403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (6))){
var state_21258__$1 = state_21258;
var statearr_21264_21404 = state_21258__$1;
(statearr_21264_21404[(2)] = null);

(statearr_21264_21404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21259 === (7))){
var inst_21254 = (state_21258[(2)]);
var state_21258__$1 = state_21258;
var statearr_21265_21405 = state_21258__$1;
(statearr_21265_21405[(2)] = inst_21254);

(statearr_21265_21405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21387,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
;
return ((function (__21387,switch__20721__auto__,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null];
(statearr_21269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1 = (function (state_21258){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__20725__auto__ = e21270;
var statearr_21271_21406 = state_21258;
(statearr_21271_21406[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21407 = state_21258;
state_21258 = G__21407;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = function(state_21258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1.call(this,state_21258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__;
})()
;})(__21387,switch__20721__auto__,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
})();
var state__20835__auto__ = (function (){var statearr_21272 = f__20834__auto__.call(null);
(statearr_21272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21399);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(__21387,c__20833__auto___21399,G__21218_21388,n__17735__auto___21386,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21408 = (__21387 + (1));
__21387 = G__21408;
continue;
} else {
}
break;
}

var c__20833__auto___21409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___21409,jobs,results,process,async){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___21409,jobs,results,process,async){
return (function (state_21294){
var state_val_21295 = (state_21294[(1)]);
if((state_val_21295 === (1))){
var state_21294__$1 = state_21294;
var statearr_21296_21410 = state_21294__$1;
(statearr_21296_21410[(2)] = null);

(statearr_21296_21410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21295 === (2))){
var state_21294__$1 = state_21294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21294__$1,(4),from);
} else {
if((state_val_21295 === (3))){
var inst_21292 = (state_21294[(2)]);
var state_21294__$1 = state_21294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21294__$1,inst_21292);
} else {
if((state_val_21295 === (4))){
var inst_21275 = (state_21294[(7)]);
var inst_21275__$1 = (state_21294[(2)]);
var inst_21276 = (inst_21275__$1 == null);
var state_21294__$1 = (function (){var statearr_21297 = state_21294;
(statearr_21297[(7)] = inst_21275__$1);

return statearr_21297;
})();
if(cljs.core.truth_(inst_21276)){
var statearr_21298_21411 = state_21294__$1;
(statearr_21298_21411[(1)] = (5));

} else {
var statearr_21299_21412 = state_21294__$1;
(statearr_21299_21412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21295 === (5))){
var inst_21278 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21294__$1 = state_21294;
var statearr_21300_21413 = state_21294__$1;
(statearr_21300_21413[(2)] = inst_21278);

(statearr_21300_21413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21295 === (6))){
var inst_21275 = (state_21294[(7)]);
var inst_21280 = (state_21294[(8)]);
var inst_21280__$1 = cljs.core.async.chan.call(null,(1));
var inst_21281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21282 = [inst_21275,inst_21280__$1];
var inst_21283 = (new cljs.core.PersistentVector(null,2,(5),inst_21281,inst_21282,null));
var state_21294__$1 = (function (){var statearr_21301 = state_21294;
(statearr_21301[(8)] = inst_21280__$1);

return statearr_21301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21294__$1,(8),jobs,inst_21283);
} else {
if((state_val_21295 === (7))){
var inst_21290 = (state_21294[(2)]);
var state_21294__$1 = state_21294;
var statearr_21302_21414 = state_21294__$1;
(statearr_21302_21414[(2)] = inst_21290);

(statearr_21302_21414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21295 === (8))){
var inst_21280 = (state_21294[(8)]);
var inst_21285 = (state_21294[(2)]);
var state_21294__$1 = (function (){var statearr_21303 = state_21294;
(statearr_21303[(9)] = inst_21285);

return statearr_21303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21294__$1,(9),results,inst_21280);
} else {
if((state_val_21295 === (9))){
var inst_21287 = (state_21294[(2)]);
var state_21294__$1 = (function (){var statearr_21304 = state_21294;
(statearr_21304[(10)] = inst_21287);

return statearr_21304;
})();
var statearr_21305_21415 = state_21294__$1;
(statearr_21305_21415[(2)] = null);

(statearr_21305_21415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20833__auto___21409,jobs,results,process,async))
;
return ((function (switch__20721__auto__,c__20833__auto___21409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_21309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__);

(statearr_21309[(1)] = (1));

return statearr_21309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1 = (function (state_21294){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21310){if((e21310 instanceof Object)){
var ex__20725__auto__ = e21310;
var statearr_21311_21416 = state_21294;
(statearr_21311_21416[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21417 = state_21294;
state_21294 = G__21417;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = function(state_21294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1.call(this,state_21294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___21409,jobs,results,process,async))
})();
var state__20835__auto__ = (function (){var statearr_21312 = f__20834__auto__.call(null);
(statearr_21312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21409);

return statearr_21312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___21409,jobs,results,process,async))
);


var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__,jobs,results,process,async){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__,jobs,results,process,async){
return (function (state_21350){
var state_val_21351 = (state_21350[(1)]);
if((state_val_21351 === (7))){
var inst_21346 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21352_21418 = state_21350__$1;
(statearr_21352_21418[(2)] = inst_21346);

(statearr_21352_21418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (20))){
var state_21350__$1 = state_21350;
var statearr_21353_21419 = state_21350__$1;
(statearr_21353_21419[(2)] = null);

(statearr_21353_21419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (1))){
var state_21350__$1 = state_21350;
var statearr_21354_21420 = state_21350__$1;
(statearr_21354_21420[(2)] = null);

(statearr_21354_21420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (4))){
var inst_21315 = (state_21350[(7)]);
var inst_21315__$1 = (state_21350[(2)]);
var inst_21316 = (inst_21315__$1 == null);
var state_21350__$1 = (function (){var statearr_21355 = state_21350;
(statearr_21355[(7)] = inst_21315__$1);

return statearr_21355;
})();
if(cljs.core.truth_(inst_21316)){
var statearr_21356_21421 = state_21350__$1;
(statearr_21356_21421[(1)] = (5));

} else {
var statearr_21357_21422 = state_21350__$1;
(statearr_21357_21422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (15))){
var inst_21328 = (state_21350[(8)]);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21350__$1,(18),to,inst_21328);
} else {
if((state_val_21351 === (21))){
var inst_21341 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21358_21423 = state_21350__$1;
(statearr_21358_21423[(2)] = inst_21341);

(statearr_21358_21423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (13))){
var inst_21343 = (state_21350[(2)]);
var state_21350__$1 = (function (){var statearr_21359 = state_21350;
(statearr_21359[(9)] = inst_21343);

return statearr_21359;
})();
var statearr_21360_21424 = state_21350__$1;
(statearr_21360_21424[(2)] = null);

(statearr_21360_21424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (6))){
var inst_21315 = (state_21350[(7)]);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(11),inst_21315);
} else {
if((state_val_21351 === (17))){
var inst_21336 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
if(cljs.core.truth_(inst_21336)){
var statearr_21361_21425 = state_21350__$1;
(statearr_21361_21425[(1)] = (19));

} else {
var statearr_21362_21426 = state_21350__$1;
(statearr_21362_21426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (3))){
var inst_21348 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else {
if((state_val_21351 === (12))){
var inst_21325 = (state_21350[(10)]);
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(14),inst_21325);
} else {
if((state_val_21351 === (2))){
var state_21350__$1 = state_21350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21350__$1,(4),results);
} else {
if((state_val_21351 === (19))){
var state_21350__$1 = state_21350;
var statearr_21363_21427 = state_21350__$1;
(statearr_21363_21427[(2)] = null);

(statearr_21363_21427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (11))){
var inst_21325 = (state_21350[(2)]);
var state_21350__$1 = (function (){var statearr_21364 = state_21350;
(statearr_21364[(10)] = inst_21325);

return statearr_21364;
})();
var statearr_21365_21428 = state_21350__$1;
(statearr_21365_21428[(2)] = null);

(statearr_21365_21428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (9))){
var state_21350__$1 = state_21350;
var statearr_21366_21429 = state_21350__$1;
(statearr_21366_21429[(2)] = null);

(statearr_21366_21429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (5))){
var state_21350__$1 = state_21350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21367_21430 = state_21350__$1;
(statearr_21367_21430[(1)] = (8));

} else {
var statearr_21368_21431 = state_21350__$1;
(statearr_21368_21431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (14))){
var inst_21328 = (state_21350[(8)]);
var inst_21330 = (state_21350[(11)]);
var inst_21328__$1 = (state_21350[(2)]);
var inst_21329 = (inst_21328__$1 == null);
var inst_21330__$1 = cljs.core.not.call(null,inst_21329);
var state_21350__$1 = (function (){var statearr_21369 = state_21350;
(statearr_21369[(8)] = inst_21328__$1);

(statearr_21369[(11)] = inst_21330__$1);

return statearr_21369;
})();
if(inst_21330__$1){
var statearr_21370_21432 = state_21350__$1;
(statearr_21370_21432[(1)] = (15));

} else {
var statearr_21371_21433 = state_21350__$1;
(statearr_21371_21433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (16))){
var inst_21330 = (state_21350[(11)]);
var state_21350__$1 = state_21350;
var statearr_21372_21434 = state_21350__$1;
(statearr_21372_21434[(2)] = inst_21330);

(statearr_21372_21434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (10))){
var inst_21322 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21373_21435 = state_21350__$1;
(statearr_21373_21435[(2)] = inst_21322);

(statearr_21373_21435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (18))){
var inst_21333 = (state_21350[(2)]);
var state_21350__$1 = state_21350;
var statearr_21374_21436 = state_21350__$1;
(statearr_21374_21436[(2)] = inst_21333);

(statearr_21374_21436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21351 === (8))){
var inst_21319 = cljs.core.async.close_BANG_.call(null,to);
var state_21350__$1 = state_21350;
var statearr_21375_21437 = state_21350__$1;
(statearr_21375_21437[(2)] = inst_21319);

(statearr_21375_21437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20833__auto__,jobs,results,process,async))
;
return ((function (switch__20721__auto__,c__20833__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_21379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__);

(statearr_21379[(1)] = (1));

return statearr_21379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1 = (function (state_21350){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21380){if((e21380 instanceof Object)){
var ex__20725__auto__ = e21380;
var statearr_21381_21438 = state_21350;
(statearr_21381_21438[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21439 = state_21350;
state_21350 = G__21439;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__,jobs,results,process,async))
})();
var state__20835__auto__ = (function (){var statearr_21382 = f__20834__auto__.call(null);
(statearr_21382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_21382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__,jobs,results,process,async))
);

return c__20833__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21440 = [];
var len__17890__auto___21443 = arguments.length;
var i__17891__auto___21444 = (0);
while(true){
if((i__17891__auto___21444 < len__17890__auto___21443)){
args21440.push((arguments[i__17891__auto___21444]));

var G__21445 = (i__17891__auto___21444 + (1));
i__17891__auto___21444 = G__21445;
continue;
} else {
}
break;
}

var G__21442 = args21440.length;
switch (G__21442) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21440.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21447 = [];
var len__17890__auto___21450 = arguments.length;
var i__17891__auto___21451 = (0);
while(true){
if((i__17891__auto___21451 < len__17890__auto___21450)){
args21447.push((arguments[i__17891__auto___21451]));

var G__21452 = (i__17891__auto___21451 + (1));
i__17891__auto___21451 = G__21452;
continue;
} else {
}
break;
}

var G__21449 = args21447.length;
switch (G__21449) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21447.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21454 = [];
var len__17890__auto___21507 = arguments.length;
var i__17891__auto___21508 = (0);
while(true){
if((i__17891__auto___21508 < len__17890__auto___21507)){
args21454.push((arguments[i__17891__auto___21508]));

var G__21509 = (i__17891__auto___21508 + (1));
i__17891__auto___21508 = G__21509;
continue;
} else {
}
break;
}

var G__21456 = args21454.length;
switch (G__21456) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21454.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20833__auto___21511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___21511,tc,fc){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___21511,tc,fc){
return (function (state_21482){
var state_val_21483 = (state_21482[(1)]);
if((state_val_21483 === (7))){
var inst_21478 = (state_21482[(2)]);
var state_21482__$1 = state_21482;
var statearr_21484_21512 = state_21482__$1;
(statearr_21484_21512[(2)] = inst_21478);

(statearr_21484_21512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (1))){
var state_21482__$1 = state_21482;
var statearr_21485_21513 = state_21482__$1;
(statearr_21485_21513[(2)] = null);

(statearr_21485_21513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (4))){
var inst_21459 = (state_21482[(7)]);
var inst_21459__$1 = (state_21482[(2)]);
var inst_21460 = (inst_21459__$1 == null);
var state_21482__$1 = (function (){var statearr_21486 = state_21482;
(statearr_21486[(7)] = inst_21459__$1);

return statearr_21486;
})();
if(cljs.core.truth_(inst_21460)){
var statearr_21487_21514 = state_21482__$1;
(statearr_21487_21514[(1)] = (5));

} else {
var statearr_21488_21515 = state_21482__$1;
(statearr_21488_21515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (13))){
var state_21482__$1 = state_21482;
var statearr_21489_21516 = state_21482__$1;
(statearr_21489_21516[(2)] = null);

(statearr_21489_21516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (6))){
var inst_21459 = (state_21482[(7)]);
var inst_21465 = p.call(null,inst_21459);
var state_21482__$1 = state_21482;
if(cljs.core.truth_(inst_21465)){
var statearr_21490_21517 = state_21482__$1;
(statearr_21490_21517[(1)] = (9));

} else {
var statearr_21491_21518 = state_21482__$1;
(statearr_21491_21518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (3))){
var inst_21480 = (state_21482[(2)]);
var state_21482__$1 = state_21482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21482__$1,inst_21480);
} else {
if((state_val_21483 === (12))){
var state_21482__$1 = state_21482;
var statearr_21492_21519 = state_21482__$1;
(statearr_21492_21519[(2)] = null);

(statearr_21492_21519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (2))){
var state_21482__$1 = state_21482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21482__$1,(4),ch);
} else {
if((state_val_21483 === (11))){
var inst_21459 = (state_21482[(7)]);
var inst_21469 = (state_21482[(2)]);
var state_21482__$1 = state_21482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21482__$1,(8),inst_21469,inst_21459);
} else {
if((state_val_21483 === (9))){
var state_21482__$1 = state_21482;
var statearr_21493_21520 = state_21482__$1;
(statearr_21493_21520[(2)] = tc);

(statearr_21493_21520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (5))){
var inst_21462 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21463 = cljs.core.async.close_BANG_.call(null,fc);
var state_21482__$1 = (function (){var statearr_21494 = state_21482;
(statearr_21494[(8)] = inst_21462);

return statearr_21494;
})();
var statearr_21495_21521 = state_21482__$1;
(statearr_21495_21521[(2)] = inst_21463);

(statearr_21495_21521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (14))){
var inst_21476 = (state_21482[(2)]);
var state_21482__$1 = state_21482;
var statearr_21496_21522 = state_21482__$1;
(statearr_21496_21522[(2)] = inst_21476);

(statearr_21496_21522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (10))){
var state_21482__$1 = state_21482;
var statearr_21497_21523 = state_21482__$1;
(statearr_21497_21523[(2)] = fc);

(statearr_21497_21523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21483 === (8))){
var inst_21471 = (state_21482[(2)]);
var state_21482__$1 = state_21482;
if(cljs.core.truth_(inst_21471)){
var statearr_21498_21524 = state_21482__$1;
(statearr_21498_21524[(1)] = (12));

} else {
var statearr_21499_21525 = state_21482__$1;
(statearr_21499_21525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});})(c__20833__auto___21511,tc,fc))
;
return ((function (switch__20721__auto__,c__20833__auto___21511,tc,fc){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_21503 = [null,null,null,null,null,null,null,null,null];
(statearr_21503[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_21503[(1)] = (1));

return statearr_21503;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_21482){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21504){if((e21504 instanceof Object)){
var ex__20725__auto__ = e21504;
var statearr_21505_21526 = state_21482;
(statearr_21505_21526[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21527 = state_21482;
state_21482 = G__21527;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_21482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_21482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___21511,tc,fc))
})();
var state__20835__auto__ = (function (){var statearr_21506 = f__20834__auto__.call(null);
(statearr_21506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___21511);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___21511,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_21591){
var state_val_21592 = (state_21591[(1)]);
if((state_val_21592 === (7))){
var inst_21587 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21593_21614 = state_21591__$1;
(statearr_21593_21614[(2)] = inst_21587);

(statearr_21593_21614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (1))){
var inst_21571 = init;
var state_21591__$1 = (function (){var statearr_21594 = state_21591;
(statearr_21594[(7)] = inst_21571);

return statearr_21594;
})();
var statearr_21595_21615 = state_21591__$1;
(statearr_21595_21615[(2)] = null);

(statearr_21595_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (4))){
var inst_21574 = (state_21591[(8)]);
var inst_21574__$1 = (state_21591[(2)]);
var inst_21575 = (inst_21574__$1 == null);
var state_21591__$1 = (function (){var statearr_21596 = state_21591;
(statearr_21596[(8)] = inst_21574__$1);

return statearr_21596;
})();
if(cljs.core.truth_(inst_21575)){
var statearr_21597_21616 = state_21591__$1;
(statearr_21597_21616[(1)] = (5));

} else {
var statearr_21598_21617 = state_21591__$1;
(statearr_21598_21617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (6))){
var inst_21574 = (state_21591[(8)]);
var inst_21571 = (state_21591[(7)]);
var inst_21578 = (state_21591[(9)]);
var inst_21578__$1 = f.call(null,inst_21571,inst_21574);
var inst_21579 = cljs.core.reduced_QMARK_.call(null,inst_21578__$1);
var state_21591__$1 = (function (){var statearr_21599 = state_21591;
(statearr_21599[(9)] = inst_21578__$1);

return statearr_21599;
})();
if(inst_21579){
var statearr_21600_21618 = state_21591__$1;
(statearr_21600_21618[(1)] = (8));

} else {
var statearr_21601_21619 = state_21591__$1;
(statearr_21601_21619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (3))){
var inst_21589 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21591__$1,inst_21589);
} else {
if((state_val_21592 === (2))){
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(4),ch);
} else {
if((state_val_21592 === (9))){
var inst_21578 = (state_21591[(9)]);
var inst_21571 = inst_21578;
var state_21591__$1 = (function (){var statearr_21602 = state_21591;
(statearr_21602[(7)] = inst_21571);

return statearr_21602;
})();
var statearr_21603_21620 = state_21591__$1;
(statearr_21603_21620[(2)] = null);

(statearr_21603_21620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (5))){
var inst_21571 = (state_21591[(7)]);
var state_21591__$1 = state_21591;
var statearr_21604_21621 = state_21591__$1;
(statearr_21604_21621[(2)] = inst_21571);

(statearr_21604_21621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (10))){
var inst_21585 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21605_21622 = state_21591__$1;
(statearr_21605_21622[(2)] = inst_21585);

(statearr_21605_21622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (8))){
var inst_21578 = (state_21591[(9)]);
var inst_21581 = cljs.core.deref.call(null,inst_21578);
var state_21591__$1 = state_21591;
var statearr_21606_21623 = state_21591__$1;
(statearr_21606_21623[(2)] = inst_21581);

(statearr_21606_21623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20722__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20722__auto____0 = (function (){
var statearr_21610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21610[(0)] = cljs$core$async$reduce_$_state_machine__20722__auto__);

(statearr_21610[(1)] = (1));

return statearr_21610;
});
var cljs$core$async$reduce_$_state_machine__20722__auto____1 = (function (state_21591){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object)){
var ex__20725__auto__ = e21611;
var statearr_21612_21624 = state_21591;
(statearr_21612_21624[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21625 = state_21591;
state_21591 = G__21625;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20722__auto__ = function(state_21591){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20722__auto____1.call(this,state_21591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20722__auto____0;
cljs$core$async$reduce_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20722__auto____1;
return cljs$core$async$reduce_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_21613 = f__20834__auto__.call(null);
(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_21613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21626 = [];
var len__17890__auto___21678 = arguments.length;
var i__17891__auto___21679 = (0);
while(true){
if((i__17891__auto___21679 < len__17890__auto___21678)){
args21626.push((arguments[i__17891__auto___21679]));

var G__21680 = (i__17891__auto___21679 + (1));
i__17891__auto___21679 = G__21680;
continue;
} else {
}
break;
}

var G__21628 = args21626.length;
switch (G__21628) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21626.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_21653){
var state_val_21654 = (state_21653[(1)]);
if((state_val_21654 === (7))){
var inst_21635 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21655_21682 = state_21653__$1;
(statearr_21655_21682[(2)] = inst_21635);

(statearr_21655_21682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (1))){
var inst_21629 = cljs.core.seq.call(null,coll);
var inst_21630 = inst_21629;
var state_21653__$1 = (function (){var statearr_21656 = state_21653;
(statearr_21656[(7)] = inst_21630);

return statearr_21656;
})();
var statearr_21657_21683 = state_21653__$1;
(statearr_21657_21683[(2)] = null);

(statearr_21657_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (4))){
var inst_21630 = (state_21653[(7)]);
var inst_21633 = cljs.core.first.call(null,inst_21630);
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21653__$1,(7),ch,inst_21633);
} else {
if((state_val_21654 === (13))){
var inst_21647 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21658_21684 = state_21653__$1;
(statearr_21658_21684[(2)] = inst_21647);

(statearr_21658_21684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (6))){
var inst_21638 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
if(cljs.core.truth_(inst_21638)){
var statearr_21659_21685 = state_21653__$1;
(statearr_21659_21685[(1)] = (8));

} else {
var statearr_21660_21686 = state_21653__$1;
(statearr_21660_21686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (3))){
var inst_21651 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21653__$1,inst_21651);
} else {
if((state_val_21654 === (12))){
var state_21653__$1 = state_21653;
var statearr_21661_21687 = state_21653__$1;
(statearr_21661_21687[(2)] = null);

(statearr_21661_21687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (2))){
var inst_21630 = (state_21653[(7)]);
var state_21653__$1 = state_21653;
if(cljs.core.truth_(inst_21630)){
var statearr_21662_21688 = state_21653__$1;
(statearr_21662_21688[(1)] = (4));

} else {
var statearr_21663_21689 = state_21653__$1;
(statearr_21663_21689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (11))){
var inst_21644 = cljs.core.async.close_BANG_.call(null,ch);
var state_21653__$1 = state_21653;
var statearr_21664_21690 = state_21653__$1;
(statearr_21664_21690[(2)] = inst_21644);

(statearr_21664_21690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (9))){
var state_21653__$1 = state_21653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21665_21691 = state_21653__$1;
(statearr_21665_21691[(1)] = (11));

} else {
var statearr_21666_21692 = state_21653__$1;
(statearr_21666_21692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (5))){
var inst_21630 = (state_21653[(7)]);
var state_21653__$1 = state_21653;
var statearr_21667_21693 = state_21653__$1;
(statearr_21667_21693[(2)] = inst_21630);

(statearr_21667_21693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (10))){
var inst_21649 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21668_21694 = state_21653__$1;
(statearr_21668_21694[(2)] = inst_21649);

(statearr_21668_21694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21654 === (8))){
var inst_21630 = (state_21653[(7)]);
var inst_21640 = cljs.core.next.call(null,inst_21630);
var inst_21630__$1 = inst_21640;
var state_21653__$1 = (function (){var statearr_21669 = state_21653;
(statearr_21669[(7)] = inst_21630__$1);

return statearr_21669;
})();
var statearr_21670_21695 = state_21653__$1;
(statearr_21670_21695[(2)] = null);

(statearr_21670_21695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_21674 = [null,null,null,null,null,null,null,null];
(statearr_21674[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_21674[(1)] = (1));

return statearr_21674;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_21653){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_21653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e21675){if((e21675 instanceof Object)){
var ex__20725__auto__ = e21675;
var statearr_21676_21696 = state_21653;
(statearr_21676_21696[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21697 = state_21653;
state_21653 = G__21697;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_21653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_21653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_21677 = f__20834__auto__.call(null);
(statearr_21677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_21677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17487__auto__ = (((_ == null))?null:_);
var m__17488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,_);
} else {
var m__17488__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17488__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,ch);
} else {
var m__17488__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m);
} else {
var m__17488__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21919 = (function (mult,ch,cs,meta21920){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21920 = meta21920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21921,meta21920__$1){
var self__ = this;
var _21921__$1 = this;
return (new cljs.core.async.t_cljs$core$async21919(self__.mult,self__.ch,self__.cs,meta21920__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21921){
var self__ = this;
var _21921__$1 = this;
return self__.meta21920;
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21920","meta21920",-838899658,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21919";

cljs.core.async.t_cljs$core$async21919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async21919");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21919 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21919(mult__$1,ch__$1,cs__$1,meta21920){
return (new cljs.core.async.t_cljs$core$async21919(mult__$1,ch__$1,cs__$1,meta21920));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21919(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20833__auto___22140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22140,cs,m,dchan,dctr,done){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22140,cs,m,dchan,dctr,done){
return (function (state_22052){
var state_val_22053 = (state_22052[(1)]);
if((state_val_22053 === (7))){
var inst_22048 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22054_22141 = state_22052__$1;
(statearr_22054_22141[(2)] = inst_22048);

(statearr_22054_22141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (20))){
var inst_21953 = (state_22052[(7)]);
var inst_21963 = cljs.core.first.call(null,inst_21953);
var inst_21964 = cljs.core.nth.call(null,inst_21963,(0),null);
var inst_21965 = cljs.core.nth.call(null,inst_21963,(1),null);
var state_22052__$1 = (function (){var statearr_22055 = state_22052;
(statearr_22055[(8)] = inst_21964);

return statearr_22055;
})();
if(cljs.core.truth_(inst_21965)){
var statearr_22056_22142 = state_22052__$1;
(statearr_22056_22142[(1)] = (22));

} else {
var statearr_22057_22143 = state_22052__$1;
(statearr_22057_22143[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (27))){
var inst_21924 = (state_22052[(9)]);
var inst_22000 = (state_22052[(10)]);
var inst_21995 = (state_22052[(11)]);
var inst_21993 = (state_22052[(12)]);
var inst_22000__$1 = cljs.core._nth.call(null,inst_21993,inst_21995);
var inst_22001 = cljs.core.async.put_BANG_.call(null,inst_22000__$1,inst_21924,done);
var state_22052__$1 = (function (){var statearr_22058 = state_22052;
(statearr_22058[(10)] = inst_22000__$1);

return statearr_22058;
})();
if(cljs.core.truth_(inst_22001)){
var statearr_22059_22144 = state_22052__$1;
(statearr_22059_22144[(1)] = (30));

} else {
var statearr_22060_22145 = state_22052__$1;
(statearr_22060_22145[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (1))){
var state_22052__$1 = state_22052;
var statearr_22061_22146 = state_22052__$1;
(statearr_22061_22146[(2)] = null);

(statearr_22061_22146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (24))){
var inst_21953 = (state_22052[(7)]);
var inst_21970 = (state_22052[(2)]);
var inst_21971 = cljs.core.next.call(null,inst_21953);
var inst_21933 = inst_21971;
var inst_21934 = null;
var inst_21935 = (0);
var inst_21936 = (0);
var state_22052__$1 = (function (){var statearr_22062 = state_22052;
(statearr_22062[(13)] = inst_21934);

(statearr_22062[(14)] = inst_21936);

(statearr_22062[(15)] = inst_21933);

(statearr_22062[(16)] = inst_21935);

(statearr_22062[(17)] = inst_21970);

return statearr_22062;
})();
var statearr_22063_22147 = state_22052__$1;
(statearr_22063_22147[(2)] = null);

(statearr_22063_22147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (39))){
var state_22052__$1 = state_22052;
var statearr_22067_22148 = state_22052__$1;
(statearr_22067_22148[(2)] = null);

(statearr_22067_22148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (4))){
var inst_21924 = (state_22052[(9)]);
var inst_21924__$1 = (state_22052[(2)]);
var inst_21925 = (inst_21924__$1 == null);
var state_22052__$1 = (function (){var statearr_22068 = state_22052;
(statearr_22068[(9)] = inst_21924__$1);

return statearr_22068;
})();
if(cljs.core.truth_(inst_21925)){
var statearr_22069_22149 = state_22052__$1;
(statearr_22069_22149[(1)] = (5));

} else {
var statearr_22070_22150 = state_22052__$1;
(statearr_22070_22150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (15))){
var inst_21934 = (state_22052[(13)]);
var inst_21936 = (state_22052[(14)]);
var inst_21933 = (state_22052[(15)]);
var inst_21935 = (state_22052[(16)]);
var inst_21949 = (state_22052[(2)]);
var inst_21950 = (inst_21936 + (1));
var tmp22064 = inst_21934;
var tmp22065 = inst_21933;
var tmp22066 = inst_21935;
var inst_21933__$1 = tmp22065;
var inst_21934__$1 = tmp22064;
var inst_21935__$1 = tmp22066;
var inst_21936__$1 = inst_21950;
var state_22052__$1 = (function (){var statearr_22071 = state_22052;
(statearr_22071[(13)] = inst_21934__$1);

(statearr_22071[(14)] = inst_21936__$1);

(statearr_22071[(15)] = inst_21933__$1);

(statearr_22071[(16)] = inst_21935__$1);

(statearr_22071[(18)] = inst_21949);

return statearr_22071;
})();
var statearr_22072_22151 = state_22052__$1;
(statearr_22072_22151[(2)] = null);

(statearr_22072_22151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (21))){
var inst_21974 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22076_22152 = state_22052__$1;
(statearr_22076_22152[(2)] = inst_21974);

(statearr_22076_22152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (31))){
var inst_22000 = (state_22052[(10)]);
var inst_22004 = done.call(null,null);
var inst_22005 = cljs.core.async.untap_STAR_.call(null,m,inst_22000);
var state_22052__$1 = (function (){var statearr_22077 = state_22052;
(statearr_22077[(19)] = inst_22004);

return statearr_22077;
})();
var statearr_22078_22153 = state_22052__$1;
(statearr_22078_22153[(2)] = inst_22005);

(statearr_22078_22153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (32))){
var inst_21992 = (state_22052[(20)]);
var inst_21994 = (state_22052[(21)]);
var inst_21995 = (state_22052[(11)]);
var inst_21993 = (state_22052[(12)]);
var inst_22007 = (state_22052[(2)]);
var inst_22008 = (inst_21995 + (1));
var tmp22073 = inst_21992;
var tmp22074 = inst_21994;
var tmp22075 = inst_21993;
var inst_21992__$1 = tmp22073;
var inst_21993__$1 = tmp22075;
var inst_21994__$1 = tmp22074;
var inst_21995__$1 = inst_22008;
var state_22052__$1 = (function (){var statearr_22079 = state_22052;
(statearr_22079[(20)] = inst_21992__$1);

(statearr_22079[(22)] = inst_22007);

(statearr_22079[(21)] = inst_21994__$1);

(statearr_22079[(11)] = inst_21995__$1);

(statearr_22079[(12)] = inst_21993__$1);

return statearr_22079;
})();
var statearr_22080_22154 = state_22052__$1;
(statearr_22080_22154[(2)] = null);

(statearr_22080_22154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (40))){
var inst_22020 = (state_22052[(23)]);
var inst_22024 = done.call(null,null);
var inst_22025 = cljs.core.async.untap_STAR_.call(null,m,inst_22020);
var state_22052__$1 = (function (){var statearr_22081 = state_22052;
(statearr_22081[(24)] = inst_22024);

return statearr_22081;
})();
var statearr_22082_22155 = state_22052__$1;
(statearr_22082_22155[(2)] = inst_22025);

(statearr_22082_22155[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (33))){
var inst_22011 = (state_22052[(25)]);
var inst_22013 = cljs.core.chunked_seq_QMARK_.call(null,inst_22011);
var state_22052__$1 = state_22052;
if(inst_22013){
var statearr_22083_22156 = state_22052__$1;
(statearr_22083_22156[(1)] = (36));

} else {
var statearr_22084_22157 = state_22052__$1;
(statearr_22084_22157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (13))){
var inst_21943 = (state_22052[(26)]);
var inst_21946 = cljs.core.async.close_BANG_.call(null,inst_21943);
var state_22052__$1 = state_22052;
var statearr_22085_22158 = state_22052__$1;
(statearr_22085_22158[(2)] = inst_21946);

(statearr_22085_22158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (22))){
var inst_21964 = (state_22052[(8)]);
var inst_21967 = cljs.core.async.close_BANG_.call(null,inst_21964);
var state_22052__$1 = state_22052;
var statearr_22086_22159 = state_22052__$1;
(statearr_22086_22159[(2)] = inst_21967);

(statearr_22086_22159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (36))){
var inst_22011 = (state_22052[(25)]);
var inst_22015 = cljs.core.chunk_first.call(null,inst_22011);
var inst_22016 = cljs.core.chunk_rest.call(null,inst_22011);
var inst_22017 = cljs.core.count.call(null,inst_22015);
var inst_21992 = inst_22016;
var inst_21993 = inst_22015;
var inst_21994 = inst_22017;
var inst_21995 = (0);
var state_22052__$1 = (function (){var statearr_22087 = state_22052;
(statearr_22087[(20)] = inst_21992);

(statearr_22087[(21)] = inst_21994);

(statearr_22087[(11)] = inst_21995);

(statearr_22087[(12)] = inst_21993);

return statearr_22087;
})();
var statearr_22088_22160 = state_22052__$1;
(statearr_22088_22160[(2)] = null);

(statearr_22088_22160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (41))){
var inst_22011 = (state_22052[(25)]);
var inst_22027 = (state_22052[(2)]);
var inst_22028 = cljs.core.next.call(null,inst_22011);
var inst_21992 = inst_22028;
var inst_21993 = null;
var inst_21994 = (0);
var inst_21995 = (0);
var state_22052__$1 = (function (){var statearr_22089 = state_22052;
(statearr_22089[(20)] = inst_21992);

(statearr_22089[(21)] = inst_21994);

(statearr_22089[(27)] = inst_22027);

(statearr_22089[(11)] = inst_21995);

(statearr_22089[(12)] = inst_21993);

return statearr_22089;
})();
var statearr_22090_22161 = state_22052__$1;
(statearr_22090_22161[(2)] = null);

(statearr_22090_22161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (43))){
var state_22052__$1 = state_22052;
var statearr_22091_22162 = state_22052__$1;
(statearr_22091_22162[(2)] = null);

(statearr_22091_22162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (29))){
var inst_22036 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22092_22163 = state_22052__$1;
(statearr_22092_22163[(2)] = inst_22036);

(statearr_22092_22163[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (44))){
var inst_22045 = (state_22052[(2)]);
var state_22052__$1 = (function (){var statearr_22093 = state_22052;
(statearr_22093[(28)] = inst_22045);

return statearr_22093;
})();
var statearr_22094_22164 = state_22052__$1;
(statearr_22094_22164[(2)] = null);

(statearr_22094_22164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (6))){
var inst_21984 = (state_22052[(29)]);
var inst_21983 = cljs.core.deref.call(null,cs);
var inst_21984__$1 = cljs.core.keys.call(null,inst_21983);
var inst_21985 = cljs.core.count.call(null,inst_21984__$1);
var inst_21986 = cljs.core.reset_BANG_.call(null,dctr,inst_21985);
var inst_21991 = cljs.core.seq.call(null,inst_21984__$1);
var inst_21992 = inst_21991;
var inst_21993 = null;
var inst_21994 = (0);
var inst_21995 = (0);
var state_22052__$1 = (function (){var statearr_22095 = state_22052;
(statearr_22095[(29)] = inst_21984__$1);

(statearr_22095[(20)] = inst_21992);

(statearr_22095[(30)] = inst_21986);

(statearr_22095[(21)] = inst_21994);

(statearr_22095[(11)] = inst_21995);

(statearr_22095[(12)] = inst_21993);

return statearr_22095;
})();
var statearr_22096_22165 = state_22052__$1;
(statearr_22096_22165[(2)] = null);

(statearr_22096_22165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (28))){
var inst_21992 = (state_22052[(20)]);
var inst_22011 = (state_22052[(25)]);
var inst_22011__$1 = cljs.core.seq.call(null,inst_21992);
var state_22052__$1 = (function (){var statearr_22097 = state_22052;
(statearr_22097[(25)] = inst_22011__$1);

return statearr_22097;
})();
if(inst_22011__$1){
var statearr_22098_22166 = state_22052__$1;
(statearr_22098_22166[(1)] = (33));

} else {
var statearr_22099_22167 = state_22052__$1;
(statearr_22099_22167[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (25))){
var inst_21994 = (state_22052[(21)]);
var inst_21995 = (state_22052[(11)]);
var inst_21997 = (inst_21995 < inst_21994);
var inst_21998 = inst_21997;
var state_22052__$1 = state_22052;
if(cljs.core.truth_(inst_21998)){
var statearr_22100_22168 = state_22052__$1;
(statearr_22100_22168[(1)] = (27));

} else {
var statearr_22101_22169 = state_22052__$1;
(statearr_22101_22169[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (34))){
var state_22052__$1 = state_22052;
var statearr_22102_22170 = state_22052__$1;
(statearr_22102_22170[(2)] = null);

(statearr_22102_22170[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (17))){
var state_22052__$1 = state_22052;
var statearr_22103_22171 = state_22052__$1;
(statearr_22103_22171[(2)] = null);

(statearr_22103_22171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (3))){
var inst_22050 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22052__$1,inst_22050);
} else {
if((state_val_22053 === (12))){
var inst_21979 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22104_22172 = state_22052__$1;
(statearr_22104_22172[(2)] = inst_21979);

(statearr_22104_22172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (2))){
var state_22052__$1 = state_22052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22052__$1,(4),ch);
} else {
if((state_val_22053 === (23))){
var state_22052__$1 = state_22052;
var statearr_22105_22173 = state_22052__$1;
(statearr_22105_22173[(2)] = null);

(statearr_22105_22173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (35))){
var inst_22034 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22106_22174 = state_22052__$1;
(statearr_22106_22174[(2)] = inst_22034);

(statearr_22106_22174[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (19))){
var inst_21953 = (state_22052[(7)]);
var inst_21957 = cljs.core.chunk_first.call(null,inst_21953);
var inst_21958 = cljs.core.chunk_rest.call(null,inst_21953);
var inst_21959 = cljs.core.count.call(null,inst_21957);
var inst_21933 = inst_21958;
var inst_21934 = inst_21957;
var inst_21935 = inst_21959;
var inst_21936 = (0);
var state_22052__$1 = (function (){var statearr_22107 = state_22052;
(statearr_22107[(13)] = inst_21934);

(statearr_22107[(14)] = inst_21936);

(statearr_22107[(15)] = inst_21933);

(statearr_22107[(16)] = inst_21935);

return statearr_22107;
})();
var statearr_22108_22175 = state_22052__$1;
(statearr_22108_22175[(2)] = null);

(statearr_22108_22175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (11))){
var inst_21933 = (state_22052[(15)]);
var inst_21953 = (state_22052[(7)]);
var inst_21953__$1 = cljs.core.seq.call(null,inst_21933);
var state_22052__$1 = (function (){var statearr_22109 = state_22052;
(statearr_22109[(7)] = inst_21953__$1);

return statearr_22109;
})();
if(inst_21953__$1){
var statearr_22110_22176 = state_22052__$1;
(statearr_22110_22176[(1)] = (16));

} else {
var statearr_22111_22177 = state_22052__$1;
(statearr_22111_22177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (9))){
var inst_21981 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22112_22178 = state_22052__$1;
(statearr_22112_22178[(2)] = inst_21981);

(statearr_22112_22178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (5))){
var inst_21931 = cljs.core.deref.call(null,cs);
var inst_21932 = cljs.core.seq.call(null,inst_21931);
var inst_21933 = inst_21932;
var inst_21934 = null;
var inst_21935 = (0);
var inst_21936 = (0);
var state_22052__$1 = (function (){var statearr_22113 = state_22052;
(statearr_22113[(13)] = inst_21934);

(statearr_22113[(14)] = inst_21936);

(statearr_22113[(15)] = inst_21933);

(statearr_22113[(16)] = inst_21935);

return statearr_22113;
})();
var statearr_22114_22179 = state_22052__$1;
(statearr_22114_22179[(2)] = null);

(statearr_22114_22179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (14))){
var state_22052__$1 = state_22052;
var statearr_22115_22180 = state_22052__$1;
(statearr_22115_22180[(2)] = null);

(statearr_22115_22180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (45))){
var inst_22042 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22116_22181 = state_22052__$1;
(statearr_22116_22181[(2)] = inst_22042);

(statearr_22116_22181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (26))){
var inst_21984 = (state_22052[(29)]);
var inst_22038 = (state_22052[(2)]);
var inst_22039 = cljs.core.seq.call(null,inst_21984);
var state_22052__$1 = (function (){var statearr_22117 = state_22052;
(statearr_22117[(31)] = inst_22038);

return statearr_22117;
})();
if(inst_22039){
var statearr_22118_22182 = state_22052__$1;
(statearr_22118_22182[(1)] = (42));

} else {
var statearr_22119_22183 = state_22052__$1;
(statearr_22119_22183[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (16))){
var inst_21953 = (state_22052[(7)]);
var inst_21955 = cljs.core.chunked_seq_QMARK_.call(null,inst_21953);
var state_22052__$1 = state_22052;
if(inst_21955){
var statearr_22120_22184 = state_22052__$1;
(statearr_22120_22184[(1)] = (19));

} else {
var statearr_22121_22185 = state_22052__$1;
(statearr_22121_22185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (38))){
var inst_22031 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22122_22186 = state_22052__$1;
(statearr_22122_22186[(2)] = inst_22031);

(statearr_22122_22186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (30))){
var state_22052__$1 = state_22052;
var statearr_22123_22187 = state_22052__$1;
(statearr_22123_22187[(2)] = null);

(statearr_22123_22187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (10))){
var inst_21934 = (state_22052[(13)]);
var inst_21936 = (state_22052[(14)]);
var inst_21942 = cljs.core._nth.call(null,inst_21934,inst_21936);
var inst_21943 = cljs.core.nth.call(null,inst_21942,(0),null);
var inst_21944 = cljs.core.nth.call(null,inst_21942,(1),null);
var state_22052__$1 = (function (){var statearr_22124 = state_22052;
(statearr_22124[(26)] = inst_21943);

return statearr_22124;
})();
if(cljs.core.truth_(inst_21944)){
var statearr_22125_22188 = state_22052__$1;
(statearr_22125_22188[(1)] = (13));

} else {
var statearr_22126_22189 = state_22052__$1;
(statearr_22126_22189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (18))){
var inst_21977 = (state_22052[(2)]);
var state_22052__$1 = state_22052;
var statearr_22127_22190 = state_22052__$1;
(statearr_22127_22190[(2)] = inst_21977);

(statearr_22127_22190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (42))){
var state_22052__$1 = state_22052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22052__$1,(45),dchan);
} else {
if((state_val_22053 === (37))){
var inst_21924 = (state_22052[(9)]);
var inst_22020 = (state_22052[(23)]);
var inst_22011 = (state_22052[(25)]);
var inst_22020__$1 = cljs.core.first.call(null,inst_22011);
var inst_22021 = cljs.core.async.put_BANG_.call(null,inst_22020__$1,inst_21924,done);
var state_22052__$1 = (function (){var statearr_22128 = state_22052;
(statearr_22128[(23)] = inst_22020__$1);

return statearr_22128;
})();
if(cljs.core.truth_(inst_22021)){
var statearr_22129_22191 = state_22052__$1;
(statearr_22129_22191[(1)] = (39));

} else {
var statearr_22130_22192 = state_22052__$1;
(statearr_22130_22192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22053 === (8))){
var inst_21936 = (state_22052[(14)]);
var inst_21935 = (state_22052[(16)]);
var inst_21938 = (inst_21936 < inst_21935);
var inst_21939 = inst_21938;
var state_22052__$1 = state_22052;
if(cljs.core.truth_(inst_21939)){
var statearr_22131_22193 = state_22052__$1;
(statearr_22131_22193[(1)] = (10));

} else {
var statearr_22132_22194 = state_22052__$1;
(statearr_22132_22194[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20833__auto___22140,cs,m,dchan,dctr,done))
;
return ((function (switch__20721__auto__,c__20833__auto___22140,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20722__auto__ = null;
var cljs$core$async$mult_$_state_machine__20722__auto____0 = (function (){
var statearr_22136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22136[(0)] = cljs$core$async$mult_$_state_machine__20722__auto__);

(statearr_22136[(1)] = (1));

return statearr_22136;
});
var cljs$core$async$mult_$_state_machine__20722__auto____1 = (function (state_22052){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22137){if((e22137 instanceof Object)){
var ex__20725__auto__ = e22137;
var statearr_22138_22195 = state_22052;
(statearr_22138_22195[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22196 = state_22052;
state_22052 = G__22196;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20722__auto__ = function(state_22052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20722__auto____1.call(this,state_22052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20722__auto____0;
cljs$core$async$mult_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20722__auto____1;
return cljs$core$async$mult_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22140,cs,m,dchan,dctr,done))
})();
var state__20835__auto__ = (function (){var statearr_22139 = f__20834__auto__.call(null);
(statearr_22139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22140);

return statearr_22139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22140,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22197 = [];
var len__17890__auto___22200 = arguments.length;
var i__17891__auto___22201 = (0);
while(true){
if((i__17891__auto___22201 < len__17890__auto___22200)){
args22197.push((arguments[i__17891__auto___22201]));

var G__22202 = (i__17891__auto___22201 + (1));
i__17891__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var G__22199 = args22197.length;
switch (G__22199) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22197.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,ch);
} else {
var m__17488__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,ch);
} else {
var m__17488__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m);
} else {
var m__17488__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,state_map);
} else {
var m__17488__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17487__auto__ = (((m == null))?null:m);
var m__17488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,m,mode);
} else {
var m__17488__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17897__auto__ = [];
var len__17890__auto___22214 = arguments.length;
var i__17891__auto___22215 = (0);
while(true){
if((i__17891__auto___22215 < len__17890__auto___22214)){
args__17897__auto__.push((arguments[i__17891__auto___22215]));

var G__22216 = (i__17891__auto___22215 + (1));
i__17891__auto___22215 = G__22216;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((3) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17898__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22208){
var map__22209 = p__22208;
var map__22209__$1 = ((((!((map__22209 == null)))?((((map__22209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22209):map__22209);
var opts = map__22209__$1;
var statearr_22211_22217 = state;
(statearr_22211_22217[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22209,map__22209__$1,opts){
return (function (val){
var statearr_22212_22218 = state;
(statearr_22212_22218[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22209,map__22209__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22213_22219 = state;
(statearr_22213_22219[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22204){
var G__22205 = cljs.core.first.call(null,seq22204);
var seq22204__$1 = cljs.core.next.call(null,seq22204);
var G__22206 = cljs.core.first.call(null,seq22204__$1);
var seq22204__$2 = cljs.core.next.call(null,seq22204__$1);
var G__22207 = cljs.core.first.call(null,seq22204__$2);
var seq22204__$3 = cljs.core.next.call(null,seq22204__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22205,G__22206,G__22207,seq22204__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22383 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22384){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22384 = meta22384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22385,meta22384__$1){
var self__ = this;
var _22385__$1 = this;
return (new cljs.core.async.t_cljs$core$async22383(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22384__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22385){
var self__ = this;
var _22385__$1 = this;
return self__.meta22384;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22384","meta22384",879979757,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22383";

cljs.core.async.t_cljs$core$async22383.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async22383");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22383 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22383(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22384){
return (new cljs.core.async.t_cljs$core$async22383(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22384));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22383(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20833__auto___22546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22483){
var state_val_22484 = (state_22483[(1)]);
if((state_val_22484 === (7))){
var inst_22401 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
var statearr_22485_22547 = state_22483__$1;
(statearr_22485_22547[(2)] = inst_22401);

(statearr_22485_22547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (20))){
var inst_22413 = (state_22483[(7)]);
var state_22483__$1 = state_22483;
var statearr_22486_22548 = state_22483__$1;
(statearr_22486_22548[(2)] = inst_22413);

(statearr_22486_22548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (27))){
var state_22483__$1 = state_22483;
var statearr_22487_22549 = state_22483__$1;
(statearr_22487_22549[(2)] = null);

(statearr_22487_22549[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (1))){
var inst_22389 = (state_22483[(8)]);
var inst_22389__$1 = calc_state.call(null);
var inst_22391 = (inst_22389__$1 == null);
var inst_22392 = cljs.core.not.call(null,inst_22391);
var state_22483__$1 = (function (){var statearr_22488 = state_22483;
(statearr_22488[(8)] = inst_22389__$1);

return statearr_22488;
})();
if(inst_22392){
var statearr_22489_22550 = state_22483__$1;
(statearr_22489_22550[(1)] = (2));

} else {
var statearr_22490_22551 = state_22483__$1;
(statearr_22490_22551[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (24))){
var inst_22436 = (state_22483[(9)]);
var inst_22457 = (state_22483[(10)]);
var inst_22443 = (state_22483[(11)]);
var inst_22457__$1 = inst_22436.call(null,inst_22443);
var state_22483__$1 = (function (){var statearr_22491 = state_22483;
(statearr_22491[(10)] = inst_22457__$1);

return statearr_22491;
})();
if(cljs.core.truth_(inst_22457__$1)){
var statearr_22492_22552 = state_22483__$1;
(statearr_22492_22552[(1)] = (29));

} else {
var statearr_22493_22553 = state_22483__$1;
(statearr_22493_22553[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (4))){
var inst_22404 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22404)){
var statearr_22494_22554 = state_22483__$1;
(statearr_22494_22554[(1)] = (8));

} else {
var statearr_22495_22555 = state_22483__$1;
(statearr_22495_22555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (15))){
var inst_22430 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22430)){
var statearr_22496_22556 = state_22483__$1;
(statearr_22496_22556[(1)] = (19));

} else {
var statearr_22497_22557 = state_22483__$1;
(statearr_22497_22557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (21))){
var inst_22435 = (state_22483[(12)]);
var inst_22435__$1 = (state_22483[(2)]);
var inst_22436 = cljs.core.get.call(null,inst_22435__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22437 = cljs.core.get.call(null,inst_22435__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22438 = cljs.core.get.call(null,inst_22435__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22483__$1 = (function (){var statearr_22498 = state_22483;
(statearr_22498[(9)] = inst_22436);

(statearr_22498[(13)] = inst_22437);

(statearr_22498[(12)] = inst_22435__$1);

return statearr_22498;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22483__$1,(22),inst_22438);
} else {
if((state_val_22484 === (31))){
var inst_22465 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22465)){
var statearr_22499_22558 = state_22483__$1;
(statearr_22499_22558[(1)] = (32));

} else {
var statearr_22500_22559 = state_22483__$1;
(statearr_22500_22559[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (32))){
var inst_22442 = (state_22483[(14)]);
var state_22483__$1 = state_22483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22483__$1,(35),out,inst_22442);
} else {
if((state_val_22484 === (33))){
var inst_22435 = (state_22483[(12)]);
var inst_22413 = inst_22435;
var state_22483__$1 = (function (){var statearr_22501 = state_22483;
(statearr_22501[(7)] = inst_22413);

return statearr_22501;
})();
var statearr_22502_22560 = state_22483__$1;
(statearr_22502_22560[(2)] = null);

(statearr_22502_22560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (13))){
var inst_22413 = (state_22483[(7)]);
var inst_22420 = inst_22413.cljs$lang$protocol_mask$partition0$;
var inst_22421 = (inst_22420 & (64));
var inst_22422 = inst_22413.cljs$core$ISeq$;
var inst_22423 = (inst_22421) || (inst_22422);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22423)){
var statearr_22503_22561 = state_22483__$1;
(statearr_22503_22561[(1)] = (16));

} else {
var statearr_22504_22562 = state_22483__$1;
(statearr_22504_22562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (22))){
var inst_22442 = (state_22483[(14)]);
var inst_22443 = (state_22483[(11)]);
var inst_22441 = (state_22483[(2)]);
var inst_22442__$1 = cljs.core.nth.call(null,inst_22441,(0),null);
var inst_22443__$1 = cljs.core.nth.call(null,inst_22441,(1),null);
var inst_22444 = (inst_22442__$1 == null);
var inst_22445 = cljs.core._EQ_.call(null,inst_22443__$1,change);
var inst_22446 = (inst_22444) || (inst_22445);
var state_22483__$1 = (function (){var statearr_22505 = state_22483;
(statearr_22505[(14)] = inst_22442__$1);

(statearr_22505[(11)] = inst_22443__$1);

return statearr_22505;
})();
if(cljs.core.truth_(inst_22446)){
var statearr_22506_22563 = state_22483__$1;
(statearr_22506_22563[(1)] = (23));

} else {
var statearr_22507_22564 = state_22483__$1;
(statearr_22507_22564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (36))){
var inst_22435 = (state_22483[(12)]);
var inst_22413 = inst_22435;
var state_22483__$1 = (function (){var statearr_22508 = state_22483;
(statearr_22508[(7)] = inst_22413);

return statearr_22508;
})();
var statearr_22509_22565 = state_22483__$1;
(statearr_22509_22565[(2)] = null);

(statearr_22509_22565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (29))){
var inst_22457 = (state_22483[(10)]);
var state_22483__$1 = state_22483;
var statearr_22510_22566 = state_22483__$1;
(statearr_22510_22566[(2)] = inst_22457);

(statearr_22510_22566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (6))){
var state_22483__$1 = state_22483;
var statearr_22511_22567 = state_22483__$1;
(statearr_22511_22567[(2)] = false);

(statearr_22511_22567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (28))){
var inst_22453 = (state_22483[(2)]);
var inst_22454 = calc_state.call(null);
var inst_22413 = inst_22454;
var state_22483__$1 = (function (){var statearr_22512 = state_22483;
(statearr_22512[(15)] = inst_22453);

(statearr_22512[(7)] = inst_22413);

return statearr_22512;
})();
var statearr_22513_22568 = state_22483__$1;
(statearr_22513_22568[(2)] = null);

(statearr_22513_22568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (25))){
var inst_22479 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
var statearr_22514_22569 = state_22483__$1;
(statearr_22514_22569[(2)] = inst_22479);

(statearr_22514_22569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (34))){
var inst_22477 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
var statearr_22515_22570 = state_22483__$1;
(statearr_22515_22570[(2)] = inst_22477);

(statearr_22515_22570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (17))){
var state_22483__$1 = state_22483;
var statearr_22516_22571 = state_22483__$1;
(statearr_22516_22571[(2)] = false);

(statearr_22516_22571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (3))){
var state_22483__$1 = state_22483;
var statearr_22517_22572 = state_22483__$1;
(statearr_22517_22572[(2)] = false);

(statearr_22517_22572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (12))){
var inst_22481 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22483__$1,inst_22481);
} else {
if((state_val_22484 === (2))){
var inst_22389 = (state_22483[(8)]);
var inst_22394 = inst_22389.cljs$lang$protocol_mask$partition0$;
var inst_22395 = (inst_22394 & (64));
var inst_22396 = inst_22389.cljs$core$ISeq$;
var inst_22397 = (inst_22395) || (inst_22396);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22397)){
var statearr_22518_22573 = state_22483__$1;
(statearr_22518_22573[(1)] = (5));

} else {
var statearr_22519_22574 = state_22483__$1;
(statearr_22519_22574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (23))){
var inst_22442 = (state_22483[(14)]);
var inst_22448 = (inst_22442 == null);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22448)){
var statearr_22520_22575 = state_22483__$1;
(statearr_22520_22575[(1)] = (26));

} else {
var statearr_22521_22576 = state_22483__$1;
(statearr_22521_22576[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (35))){
var inst_22468 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
if(cljs.core.truth_(inst_22468)){
var statearr_22522_22577 = state_22483__$1;
(statearr_22522_22577[(1)] = (36));

} else {
var statearr_22523_22578 = state_22483__$1;
(statearr_22523_22578[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (19))){
var inst_22413 = (state_22483[(7)]);
var inst_22432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22413);
var state_22483__$1 = state_22483;
var statearr_22524_22579 = state_22483__$1;
(statearr_22524_22579[(2)] = inst_22432);

(statearr_22524_22579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (11))){
var inst_22413 = (state_22483[(7)]);
var inst_22417 = (inst_22413 == null);
var inst_22418 = cljs.core.not.call(null,inst_22417);
var state_22483__$1 = state_22483;
if(inst_22418){
var statearr_22525_22580 = state_22483__$1;
(statearr_22525_22580[(1)] = (13));

} else {
var statearr_22526_22581 = state_22483__$1;
(statearr_22526_22581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (9))){
var inst_22389 = (state_22483[(8)]);
var state_22483__$1 = state_22483;
var statearr_22527_22582 = state_22483__$1;
(statearr_22527_22582[(2)] = inst_22389);

(statearr_22527_22582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (5))){
var state_22483__$1 = state_22483;
var statearr_22528_22583 = state_22483__$1;
(statearr_22528_22583[(2)] = true);

(statearr_22528_22583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (14))){
var state_22483__$1 = state_22483;
var statearr_22529_22584 = state_22483__$1;
(statearr_22529_22584[(2)] = false);

(statearr_22529_22584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (26))){
var inst_22443 = (state_22483[(11)]);
var inst_22450 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22443);
var state_22483__$1 = state_22483;
var statearr_22530_22585 = state_22483__$1;
(statearr_22530_22585[(2)] = inst_22450);

(statearr_22530_22585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (16))){
var state_22483__$1 = state_22483;
var statearr_22531_22586 = state_22483__$1;
(statearr_22531_22586[(2)] = true);

(statearr_22531_22586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (38))){
var inst_22473 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
var statearr_22532_22587 = state_22483__$1;
(statearr_22532_22587[(2)] = inst_22473);

(statearr_22532_22587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (30))){
var inst_22436 = (state_22483[(9)]);
var inst_22437 = (state_22483[(13)]);
var inst_22443 = (state_22483[(11)]);
var inst_22460 = cljs.core.empty_QMARK_.call(null,inst_22436);
var inst_22461 = inst_22437.call(null,inst_22443);
var inst_22462 = cljs.core.not.call(null,inst_22461);
var inst_22463 = (inst_22460) && (inst_22462);
var state_22483__$1 = state_22483;
var statearr_22533_22588 = state_22483__$1;
(statearr_22533_22588[(2)] = inst_22463);

(statearr_22533_22588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (10))){
var inst_22389 = (state_22483[(8)]);
var inst_22409 = (state_22483[(2)]);
var inst_22410 = cljs.core.get.call(null,inst_22409,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22411 = cljs.core.get.call(null,inst_22409,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22412 = cljs.core.get.call(null,inst_22409,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22413 = inst_22389;
var state_22483__$1 = (function (){var statearr_22534 = state_22483;
(statearr_22534[(16)] = inst_22412);

(statearr_22534[(7)] = inst_22413);

(statearr_22534[(17)] = inst_22411);

(statearr_22534[(18)] = inst_22410);

return statearr_22534;
})();
var statearr_22535_22589 = state_22483__$1;
(statearr_22535_22589[(2)] = null);

(statearr_22535_22589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (18))){
var inst_22427 = (state_22483[(2)]);
var state_22483__$1 = state_22483;
var statearr_22536_22590 = state_22483__$1;
(statearr_22536_22590[(2)] = inst_22427);

(statearr_22536_22590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (37))){
var state_22483__$1 = state_22483;
var statearr_22537_22591 = state_22483__$1;
(statearr_22537_22591[(2)] = null);

(statearr_22537_22591[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22484 === (8))){
var inst_22389 = (state_22483[(8)]);
var inst_22406 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22389);
var state_22483__$1 = state_22483;
var statearr_22538_22592 = state_22483__$1;
(statearr_22538_22592[(2)] = inst_22406);

(statearr_22538_22592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20721__auto__,c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20722__auto__ = null;
var cljs$core$async$mix_$_state_machine__20722__auto____0 = (function (){
var statearr_22542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22542[(0)] = cljs$core$async$mix_$_state_machine__20722__auto__);

(statearr_22542[(1)] = (1));

return statearr_22542;
});
var cljs$core$async$mix_$_state_machine__20722__auto____1 = (function (state_22483){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22543){if((e22543 instanceof Object)){
var ex__20725__auto__ = e22543;
var statearr_22544_22593 = state_22483;
(statearr_22544_22593[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22594 = state_22483;
state_22483 = G__22594;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20722__auto__ = function(state_22483){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20722__auto____1.call(this,state_22483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20722__auto____0;
cljs$core$async$mix_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20722__auto____1;
return cljs$core$async$mix_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20835__auto__ = (function (){var statearr_22545 = f__20834__auto__.call(null);
(statearr_22545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22546);

return statearr_22545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22546,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17487__auto__ = (((p == null))?null:p);
var m__17488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17488__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17487__auto__ = (((p == null))?null:p);
var m__17488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,p,v,ch);
} else {
var m__17488__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22595 = [];
var len__17890__auto___22598 = arguments.length;
var i__17891__auto___22599 = (0);
while(true){
if((i__17891__auto___22599 < len__17890__auto___22598)){
args22595.push((arguments[i__17891__auto___22599]));

var G__22600 = (i__17891__auto___22599 + (1));
i__17891__auto___22599 = G__22600;
continue;
} else {
}
break;
}

var G__22597 = args22595.length;
switch (G__22597) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22595.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17487__auto__ = (((p == null))?null:p);
var m__17488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,p);
} else {
var m__17488__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17487__auto__ = (((p == null))?null:p);
var m__17488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17487__auto__)]);
if(!((m__17488__auto__ == null))){
return m__17488__auto__.call(null,p,v);
} else {
var m__17488__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17488__auto____$1 == null))){
return m__17488__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22603 = [];
var len__17890__auto___22728 = arguments.length;
var i__17891__auto___22729 = (0);
while(true){
if((i__17891__auto___22729 < len__17890__auto___22728)){
args22603.push((arguments[i__17891__auto___22729]));

var G__22730 = (i__17891__auto___22729 + (1));
i__17891__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var G__22605 = args22603.length;
switch (G__22605) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22603.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16832__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16832__auto__,mults){
return (function (p1__22602_SHARP_){
if(cljs.core.truth_(p1__22602_SHARP_.call(null,topic))){
return p1__22602_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16832__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22606 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22607){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22607 = meta22607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22608,meta22607__$1){
var self__ = this;
var _22608__$1 = this;
return (new cljs.core.async.t_cljs$core$async22606(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22607__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22608){
var self__ = this;
var _22608__$1 = this;
return self__.meta22607;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22607","meta22607",-1795274326,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22606";

cljs.core.async.t_cljs$core$async22606.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async22606");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22606 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22606(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22607){
return (new cljs.core.async.t_cljs$core$async22606(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22607));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22606(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20833__auto___22732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22732,mults,ensure_mult,p){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22732,mults,ensure_mult,p){
return (function (state_22680){
var state_val_22681 = (state_22680[(1)]);
if((state_val_22681 === (7))){
var inst_22676 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22682_22733 = state_22680__$1;
(statearr_22682_22733[(2)] = inst_22676);

(statearr_22682_22733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (20))){
var state_22680__$1 = state_22680;
var statearr_22683_22734 = state_22680__$1;
(statearr_22683_22734[(2)] = null);

(statearr_22683_22734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (1))){
var state_22680__$1 = state_22680;
var statearr_22684_22735 = state_22680__$1;
(statearr_22684_22735[(2)] = null);

(statearr_22684_22735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (24))){
var inst_22659 = (state_22680[(7)]);
var inst_22668 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22659);
var state_22680__$1 = state_22680;
var statearr_22685_22736 = state_22680__$1;
(statearr_22685_22736[(2)] = inst_22668);

(statearr_22685_22736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (4))){
var inst_22611 = (state_22680[(8)]);
var inst_22611__$1 = (state_22680[(2)]);
var inst_22612 = (inst_22611__$1 == null);
var state_22680__$1 = (function (){var statearr_22686 = state_22680;
(statearr_22686[(8)] = inst_22611__$1);

return statearr_22686;
})();
if(cljs.core.truth_(inst_22612)){
var statearr_22687_22737 = state_22680__$1;
(statearr_22687_22737[(1)] = (5));

} else {
var statearr_22688_22738 = state_22680__$1;
(statearr_22688_22738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (15))){
var inst_22653 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22689_22739 = state_22680__$1;
(statearr_22689_22739[(2)] = inst_22653);

(statearr_22689_22739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (21))){
var inst_22673 = (state_22680[(2)]);
var state_22680__$1 = (function (){var statearr_22690 = state_22680;
(statearr_22690[(9)] = inst_22673);

return statearr_22690;
})();
var statearr_22691_22740 = state_22680__$1;
(statearr_22691_22740[(2)] = null);

(statearr_22691_22740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (13))){
var inst_22635 = (state_22680[(10)]);
var inst_22637 = cljs.core.chunked_seq_QMARK_.call(null,inst_22635);
var state_22680__$1 = state_22680;
if(inst_22637){
var statearr_22692_22741 = state_22680__$1;
(statearr_22692_22741[(1)] = (16));

} else {
var statearr_22693_22742 = state_22680__$1;
(statearr_22693_22742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (22))){
var inst_22665 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
if(cljs.core.truth_(inst_22665)){
var statearr_22694_22743 = state_22680__$1;
(statearr_22694_22743[(1)] = (23));

} else {
var statearr_22695_22744 = state_22680__$1;
(statearr_22695_22744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (6))){
var inst_22661 = (state_22680[(11)]);
var inst_22659 = (state_22680[(7)]);
var inst_22611 = (state_22680[(8)]);
var inst_22659__$1 = topic_fn.call(null,inst_22611);
var inst_22660 = cljs.core.deref.call(null,mults);
var inst_22661__$1 = cljs.core.get.call(null,inst_22660,inst_22659__$1);
var state_22680__$1 = (function (){var statearr_22696 = state_22680;
(statearr_22696[(11)] = inst_22661__$1);

(statearr_22696[(7)] = inst_22659__$1);

return statearr_22696;
})();
if(cljs.core.truth_(inst_22661__$1)){
var statearr_22697_22745 = state_22680__$1;
(statearr_22697_22745[(1)] = (19));

} else {
var statearr_22698_22746 = state_22680__$1;
(statearr_22698_22746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (25))){
var inst_22670 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22699_22747 = state_22680__$1;
(statearr_22699_22747[(2)] = inst_22670);

(statearr_22699_22747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (17))){
var inst_22635 = (state_22680[(10)]);
var inst_22644 = cljs.core.first.call(null,inst_22635);
var inst_22645 = cljs.core.async.muxch_STAR_.call(null,inst_22644);
var inst_22646 = cljs.core.async.close_BANG_.call(null,inst_22645);
var inst_22647 = cljs.core.next.call(null,inst_22635);
var inst_22621 = inst_22647;
var inst_22622 = null;
var inst_22623 = (0);
var inst_22624 = (0);
var state_22680__$1 = (function (){var statearr_22700 = state_22680;
(statearr_22700[(12)] = inst_22646);

(statearr_22700[(13)] = inst_22622);

(statearr_22700[(14)] = inst_22623);

(statearr_22700[(15)] = inst_22621);

(statearr_22700[(16)] = inst_22624);

return statearr_22700;
})();
var statearr_22701_22748 = state_22680__$1;
(statearr_22701_22748[(2)] = null);

(statearr_22701_22748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (3))){
var inst_22678 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22680__$1,inst_22678);
} else {
if((state_val_22681 === (12))){
var inst_22655 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22702_22749 = state_22680__$1;
(statearr_22702_22749[(2)] = inst_22655);

(statearr_22702_22749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (2))){
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22680__$1,(4),ch);
} else {
if((state_val_22681 === (23))){
var state_22680__$1 = state_22680;
var statearr_22703_22750 = state_22680__$1;
(statearr_22703_22750[(2)] = null);

(statearr_22703_22750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (19))){
var inst_22661 = (state_22680[(11)]);
var inst_22611 = (state_22680[(8)]);
var inst_22663 = cljs.core.async.muxch_STAR_.call(null,inst_22661);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22680__$1,(22),inst_22663,inst_22611);
} else {
if((state_val_22681 === (11))){
var inst_22635 = (state_22680[(10)]);
var inst_22621 = (state_22680[(15)]);
var inst_22635__$1 = cljs.core.seq.call(null,inst_22621);
var state_22680__$1 = (function (){var statearr_22704 = state_22680;
(statearr_22704[(10)] = inst_22635__$1);

return statearr_22704;
})();
if(inst_22635__$1){
var statearr_22705_22751 = state_22680__$1;
(statearr_22705_22751[(1)] = (13));

} else {
var statearr_22706_22752 = state_22680__$1;
(statearr_22706_22752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (9))){
var inst_22657 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22707_22753 = state_22680__$1;
(statearr_22707_22753[(2)] = inst_22657);

(statearr_22707_22753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (5))){
var inst_22618 = cljs.core.deref.call(null,mults);
var inst_22619 = cljs.core.vals.call(null,inst_22618);
var inst_22620 = cljs.core.seq.call(null,inst_22619);
var inst_22621 = inst_22620;
var inst_22622 = null;
var inst_22623 = (0);
var inst_22624 = (0);
var state_22680__$1 = (function (){var statearr_22708 = state_22680;
(statearr_22708[(13)] = inst_22622);

(statearr_22708[(14)] = inst_22623);

(statearr_22708[(15)] = inst_22621);

(statearr_22708[(16)] = inst_22624);

return statearr_22708;
})();
var statearr_22709_22754 = state_22680__$1;
(statearr_22709_22754[(2)] = null);

(statearr_22709_22754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (14))){
var state_22680__$1 = state_22680;
var statearr_22713_22755 = state_22680__$1;
(statearr_22713_22755[(2)] = null);

(statearr_22713_22755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (16))){
var inst_22635 = (state_22680[(10)]);
var inst_22639 = cljs.core.chunk_first.call(null,inst_22635);
var inst_22640 = cljs.core.chunk_rest.call(null,inst_22635);
var inst_22641 = cljs.core.count.call(null,inst_22639);
var inst_22621 = inst_22640;
var inst_22622 = inst_22639;
var inst_22623 = inst_22641;
var inst_22624 = (0);
var state_22680__$1 = (function (){var statearr_22714 = state_22680;
(statearr_22714[(13)] = inst_22622);

(statearr_22714[(14)] = inst_22623);

(statearr_22714[(15)] = inst_22621);

(statearr_22714[(16)] = inst_22624);

return statearr_22714;
})();
var statearr_22715_22756 = state_22680__$1;
(statearr_22715_22756[(2)] = null);

(statearr_22715_22756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (10))){
var inst_22622 = (state_22680[(13)]);
var inst_22623 = (state_22680[(14)]);
var inst_22621 = (state_22680[(15)]);
var inst_22624 = (state_22680[(16)]);
var inst_22629 = cljs.core._nth.call(null,inst_22622,inst_22624);
var inst_22630 = cljs.core.async.muxch_STAR_.call(null,inst_22629);
var inst_22631 = cljs.core.async.close_BANG_.call(null,inst_22630);
var inst_22632 = (inst_22624 + (1));
var tmp22710 = inst_22622;
var tmp22711 = inst_22623;
var tmp22712 = inst_22621;
var inst_22621__$1 = tmp22712;
var inst_22622__$1 = tmp22710;
var inst_22623__$1 = tmp22711;
var inst_22624__$1 = inst_22632;
var state_22680__$1 = (function (){var statearr_22716 = state_22680;
(statearr_22716[(13)] = inst_22622__$1);

(statearr_22716[(14)] = inst_22623__$1);

(statearr_22716[(15)] = inst_22621__$1);

(statearr_22716[(17)] = inst_22631);

(statearr_22716[(16)] = inst_22624__$1);

return statearr_22716;
})();
var statearr_22717_22757 = state_22680__$1;
(statearr_22717_22757[(2)] = null);

(statearr_22717_22757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (18))){
var inst_22650 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22718_22758 = state_22680__$1;
(statearr_22718_22758[(2)] = inst_22650);

(statearr_22718_22758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (8))){
var inst_22623 = (state_22680[(14)]);
var inst_22624 = (state_22680[(16)]);
var inst_22626 = (inst_22624 < inst_22623);
var inst_22627 = inst_22626;
var state_22680__$1 = state_22680;
if(cljs.core.truth_(inst_22627)){
var statearr_22719_22759 = state_22680__$1;
(statearr_22719_22759[(1)] = (10));

} else {
var statearr_22720_22760 = state_22680__$1;
(statearr_22720_22760[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20833__auto___22732,mults,ensure_mult,p))
;
return ((function (switch__20721__auto__,c__20833__auto___22732,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_22724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22724[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_22724[(1)] = (1));

return statearr_22724;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_22680){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22725){if((e22725 instanceof Object)){
var ex__20725__auto__ = e22725;
var statearr_22726_22761 = state_22680;
(statearr_22726_22761[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22762 = state_22680;
state_22680 = G__22762;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_22680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_22680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22732,mults,ensure_mult,p))
})();
var state__20835__auto__ = (function (){var statearr_22727 = f__20834__auto__.call(null);
(statearr_22727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22732);

return statearr_22727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22732,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22763 = [];
var len__17890__auto___22766 = arguments.length;
var i__17891__auto___22767 = (0);
while(true){
if((i__17891__auto___22767 < len__17890__auto___22766)){
args22763.push((arguments[i__17891__auto___22767]));

var G__22768 = (i__17891__auto___22767 + (1));
i__17891__auto___22767 = G__22768;
continue;
} else {
}
break;
}

var G__22765 = args22763.length;
switch (G__22765) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22763.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22770 = [];
var len__17890__auto___22773 = arguments.length;
var i__17891__auto___22774 = (0);
while(true){
if((i__17891__auto___22774 < len__17890__auto___22773)){
args22770.push((arguments[i__17891__auto___22774]));

var G__22775 = (i__17891__auto___22774 + (1));
i__17891__auto___22774 = G__22775;
continue;
} else {
}
break;
}

var G__22772 = args22770.length;
switch (G__22772) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22770.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22777 = [];
var len__17890__auto___22848 = arguments.length;
var i__17891__auto___22849 = (0);
while(true){
if((i__17891__auto___22849 < len__17890__auto___22848)){
args22777.push((arguments[i__17891__auto___22849]));

var G__22850 = (i__17891__auto___22849 + (1));
i__17891__auto___22849 = G__22850;
continue;
} else {
}
break;
}

var G__22779 = args22777.length;
switch (G__22779) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22777.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20833__auto___22852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22818){
var state_val_22819 = (state_22818[(1)]);
if((state_val_22819 === (7))){
var state_22818__$1 = state_22818;
var statearr_22820_22853 = state_22818__$1;
(statearr_22820_22853[(2)] = null);

(statearr_22820_22853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (1))){
var state_22818__$1 = state_22818;
var statearr_22821_22854 = state_22818__$1;
(statearr_22821_22854[(2)] = null);

(statearr_22821_22854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (4))){
var inst_22782 = (state_22818[(7)]);
var inst_22784 = (inst_22782 < cnt);
var state_22818__$1 = state_22818;
if(cljs.core.truth_(inst_22784)){
var statearr_22822_22855 = state_22818__$1;
(statearr_22822_22855[(1)] = (6));

} else {
var statearr_22823_22856 = state_22818__$1;
(statearr_22823_22856[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (15))){
var inst_22814 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22824_22857 = state_22818__$1;
(statearr_22824_22857[(2)] = inst_22814);

(statearr_22824_22857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (13))){
var inst_22807 = cljs.core.async.close_BANG_.call(null,out);
var state_22818__$1 = state_22818;
var statearr_22825_22858 = state_22818__$1;
(statearr_22825_22858[(2)] = inst_22807);

(statearr_22825_22858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (6))){
var state_22818__$1 = state_22818;
var statearr_22826_22859 = state_22818__$1;
(statearr_22826_22859[(2)] = null);

(statearr_22826_22859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (3))){
var inst_22816 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22818__$1,inst_22816);
} else {
if((state_val_22819 === (12))){
var inst_22804 = (state_22818[(8)]);
var inst_22804__$1 = (state_22818[(2)]);
var inst_22805 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22804__$1);
var state_22818__$1 = (function (){var statearr_22827 = state_22818;
(statearr_22827[(8)] = inst_22804__$1);

return statearr_22827;
})();
if(cljs.core.truth_(inst_22805)){
var statearr_22828_22860 = state_22818__$1;
(statearr_22828_22860[(1)] = (13));

} else {
var statearr_22829_22861 = state_22818__$1;
(statearr_22829_22861[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (2))){
var inst_22781 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22782 = (0);
var state_22818__$1 = (function (){var statearr_22830 = state_22818;
(statearr_22830[(7)] = inst_22782);

(statearr_22830[(9)] = inst_22781);

return statearr_22830;
})();
var statearr_22831_22862 = state_22818__$1;
(statearr_22831_22862[(2)] = null);

(statearr_22831_22862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (11))){
var inst_22782 = (state_22818[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22818,(10),Object,null,(9));
var inst_22791 = chs__$1.call(null,inst_22782);
var inst_22792 = done.call(null,inst_22782);
var inst_22793 = cljs.core.async.take_BANG_.call(null,inst_22791,inst_22792);
var state_22818__$1 = state_22818;
var statearr_22832_22863 = state_22818__$1;
(statearr_22832_22863[(2)] = inst_22793);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (9))){
var inst_22782 = (state_22818[(7)]);
var inst_22795 = (state_22818[(2)]);
var inst_22796 = (inst_22782 + (1));
var inst_22782__$1 = inst_22796;
var state_22818__$1 = (function (){var statearr_22833 = state_22818;
(statearr_22833[(7)] = inst_22782__$1);

(statearr_22833[(10)] = inst_22795);

return statearr_22833;
})();
var statearr_22834_22864 = state_22818__$1;
(statearr_22834_22864[(2)] = null);

(statearr_22834_22864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (5))){
var inst_22802 = (state_22818[(2)]);
var state_22818__$1 = (function (){var statearr_22835 = state_22818;
(statearr_22835[(11)] = inst_22802);

return statearr_22835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22818__$1,(12),dchan);
} else {
if((state_val_22819 === (14))){
var inst_22804 = (state_22818[(8)]);
var inst_22809 = cljs.core.apply.call(null,f,inst_22804);
var state_22818__$1 = state_22818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22818__$1,(16),out,inst_22809);
} else {
if((state_val_22819 === (16))){
var inst_22811 = (state_22818[(2)]);
var state_22818__$1 = (function (){var statearr_22836 = state_22818;
(statearr_22836[(12)] = inst_22811);

return statearr_22836;
})();
var statearr_22837_22865 = state_22818__$1;
(statearr_22837_22865[(2)] = null);

(statearr_22837_22865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (10))){
var inst_22786 = (state_22818[(2)]);
var inst_22787 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22818__$1 = (function (){var statearr_22838 = state_22818;
(statearr_22838[(13)] = inst_22786);

return statearr_22838;
})();
var statearr_22839_22866 = state_22818__$1;
(statearr_22839_22866[(2)] = inst_22787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22819 === (8))){
var inst_22800 = (state_22818[(2)]);
var state_22818__$1 = state_22818;
var statearr_22840_22867 = state_22818__$1;
(statearr_22840_22867[(2)] = inst_22800);

(statearr_22840_22867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20721__auto__,c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_22844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22844[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_22844[(1)] = (1));

return statearr_22844;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_22818){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22845){if((e22845 instanceof Object)){
var ex__20725__auto__ = e22845;
var statearr_22846_22868 = state_22818;
(statearr_22846_22868[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22869 = state_22818;
state_22818 = G__22869;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_22818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_22818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20835__auto__ = (function (){var statearr_22847 = f__20834__auto__.call(null);
(statearr_22847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22852);

return statearr_22847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22852,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22871 = [];
var len__17890__auto___22927 = arguments.length;
var i__17891__auto___22928 = (0);
while(true){
if((i__17891__auto___22928 < len__17890__auto___22927)){
args22871.push((arguments[i__17891__auto___22928]));

var G__22929 = (i__17891__auto___22928 + (1));
i__17891__auto___22928 = G__22929;
continue;
} else {
}
break;
}

var G__22873 = args22871.length;
switch (G__22873) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22871.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___22931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22931,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22931,out){
return (function (state_22903){
var state_val_22904 = (state_22903[(1)]);
if((state_val_22904 === (7))){
var inst_22882 = (state_22903[(7)]);
var inst_22883 = (state_22903[(8)]);
var inst_22882__$1 = (state_22903[(2)]);
var inst_22883__$1 = cljs.core.nth.call(null,inst_22882__$1,(0),null);
var inst_22884 = cljs.core.nth.call(null,inst_22882__$1,(1),null);
var inst_22885 = (inst_22883__$1 == null);
var state_22903__$1 = (function (){var statearr_22905 = state_22903;
(statearr_22905[(7)] = inst_22882__$1);

(statearr_22905[(9)] = inst_22884);

(statearr_22905[(8)] = inst_22883__$1);

return statearr_22905;
})();
if(cljs.core.truth_(inst_22885)){
var statearr_22906_22932 = state_22903__$1;
(statearr_22906_22932[(1)] = (8));

} else {
var statearr_22907_22933 = state_22903__$1;
(statearr_22907_22933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (1))){
var inst_22874 = cljs.core.vec.call(null,chs);
var inst_22875 = inst_22874;
var state_22903__$1 = (function (){var statearr_22908 = state_22903;
(statearr_22908[(10)] = inst_22875);

return statearr_22908;
})();
var statearr_22909_22934 = state_22903__$1;
(statearr_22909_22934[(2)] = null);

(statearr_22909_22934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (4))){
var inst_22875 = (state_22903[(10)]);
var state_22903__$1 = state_22903;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22903__$1,(7),inst_22875);
} else {
if((state_val_22904 === (6))){
var inst_22899 = (state_22903[(2)]);
var state_22903__$1 = state_22903;
var statearr_22910_22935 = state_22903__$1;
(statearr_22910_22935[(2)] = inst_22899);

(statearr_22910_22935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (3))){
var inst_22901 = (state_22903[(2)]);
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22903__$1,inst_22901);
} else {
if((state_val_22904 === (2))){
var inst_22875 = (state_22903[(10)]);
var inst_22877 = cljs.core.count.call(null,inst_22875);
var inst_22878 = (inst_22877 > (0));
var state_22903__$1 = state_22903;
if(cljs.core.truth_(inst_22878)){
var statearr_22912_22936 = state_22903__$1;
(statearr_22912_22936[(1)] = (4));

} else {
var statearr_22913_22937 = state_22903__$1;
(statearr_22913_22937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (11))){
var inst_22875 = (state_22903[(10)]);
var inst_22892 = (state_22903[(2)]);
var tmp22911 = inst_22875;
var inst_22875__$1 = tmp22911;
var state_22903__$1 = (function (){var statearr_22914 = state_22903;
(statearr_22914[(11)] = inst_22892);

(statearr_22914[(10)] = inst_22875__$1);

return statearr_22914;
})();
var statearr_22915_22938 = state_22903__$1;
(statearr_22915_22938[(2)] = null);

(statearr_22915_22938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (9))){
var inst_22883 = (state_22903[(8)]);
var state_22903__$1 = state_22903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22903__$1,(11),out,inst_22883);
} else {
if((state_val_22904 === (5))){
var inst_22897 = cljs.core.async.close_BANG_.call(null,out);
var state_22903__$1 = state_22903;
var statearr_22916_22939 = state_22903__$1;
(statearr_22916_22939[(2)] = inst_22897);

(statearr_22916_22939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (10))){
var inst_22895 = (state_22903[(2)]);
var state_22903__$1 = state_22903;
var statearr_22917_22940 = state_22903__$1;
(statearr_22917_22940[(2)] = inst_22895);

(statearr_22917_22940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22904 === (8))){
var inst_22882 = (state_22903[(7)]);
var inst_22884 = (state_22903[(9)]);
var inst_22875 = (state_22903[(10)]);
var inst_22883 = (state_22903[(8)]);
var inst_22887 = (function (){var cs = inst_22875;
var vec__22880 = inst_22882;
var v = inst_22883;
var c = inst_22884;
return ((function (cs,vec__22880,v,c,inst_22882,inst_22884,inst_22875,inst_22883,state_val_22904,c__20833__auto___22931,out){
return (function (p1__22870_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22870_SHARP_);
});
;})(cs,vec__22880,v,c,inst_22882,inst_22884,inst_22875,inst_22883,state_val_22904,c__20833__auto___22931,out))
})();
var inst_22888 = cljs.core.filterv.call(null,inst_22887,inst_22875);
var inst_22875__$1 = inst_22888;
var state_22903__$1 = (function (){var statearr_22918 = state_22903;
(statearr_22918[(10)] = inst_22875__$1);

return statearr_22918;
})();
var statearr_22919_22941 = state_22903__$1;
(statearr_22919_22941[(2)] = null);

(statearr_22919_22941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20833__auto___22931,out))
;
return ((function (switch__20721__auto__,c__20833__auto___22931,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_22923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22923[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_22923[(1)] = (1));

return statearr_22923;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_22903){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22924){if((e22924 instanceof Object)){
var ex__20725__auto__ = e22924;
var statearr_22925_22942 = state_22903;
(statearr_22925_22942[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22943 = state_22903;
state_22903 = G__22943;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_22903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_22903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22931,out))
})();
var state__20835__auto__ = (function (){var statearr_22926 = f__20834__auto__.call(null);
(statearr_22926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22931);

return statearr_22926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22931,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22944 = [];
var len__17890__auto___22993 = arguments.length;
var i__17891__auto___22994 = (0);
while(true){
if((i__17891__auto___22994 < len__17890__auto___22993)){
args22944.push((arguments[i__17891__auto___22994]));

var G__22995 = (i__17891__auto___22994 + (1));
i__17891__auto___22994 = G__22995;
continue;
} else {
}
break;
}

var G__22946 = args22944.length;
switch (G__22946) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22944.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___22997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___22997,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___22997,out){
return (function (state_22970){
var state_val_22971 = (state_22970[(1)]);
if((state_val_22971 === (7))){
var inst_22952 = (state_22970[(7)]);
var inst_22952__$1 = (state_22970[(2)]);
var inst_22953 = (inst_22952__$1 == null);
var inst_22954 = cljs.core.not.call(null,inst_22953);
var state_22970__$1 = (function (){var statearr_22972 = state_22970;
(statearr_22972[(7)] = inst_22952__$1);

return statearr_22972;
})();
if(inst_22954){
var statearr_22973_22998 = state_22970__$1;
(statearr_22973_22998[(1)] = (8));

} else {
var statearr_22974_22999 = state_22970__$1;
(statearr_22974_22999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (1))){
var inst_22947 = (0);
var state_22970__$1 = (function (){var statearr_22975 = state_22970;
(statearr_22975[(8)] = inst_22947);

return statearr_22975;
})();
var statearr_22976_23000 = state_22970__$1;
(statearr_22976_23000[(2)] = null);

(statearr_22976_23000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (4))){
var state_22970__$1 = state_22970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22970__$1,(7),ch);
} else {
if((state_val_22971 === (6))){
var inst_22965 = (state_22970[(2)]);
var state_22970__$1 = state_22970;
var statearr_22977_23001 = state_22970__$1;
(statearr_22977_23001[(2)] = inst_22965);

(statearr_22977_23001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (3))){
var inst_22967 = (state_22970[(2)]);
var inst_22968 = cljs.core.async.close_BANG_.call(null,out);
var state_22970__$1 = (function (){var statearr_22978 = state_22970;
(statearr_22978[(9)] = inst_22967);

return statearr_22978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22970__$1,inst_22968);
} else {
if((state_val_22971 === (2))){
var inst_22947 = (state_22970[(8)]);
var inst_22949 = (inst_22947 < n);
var state_22970__$1 = state_22970;
if(cljs.core.truth_(inst_22949)){
var statearr_22979_23002 = state_22970__$1;
(statearr_22979_23002[(1)] = (4));

} else {
var statearr_22980_23003 = state_22970__$1;
(statearr_22980_23003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (11))){
var inst_22947 = (state_22970[(8)]);
var inst_22957 = (state_22970[(2)]);
var inst_22958 = (inst_22947 + (1));
var inst_22947__$1 = inst_22958;
var state_22970__$1 = (function (){var statearr_22981 = state_22970;
(statearr_22981[(10)] = inst_22957);

(statearr_22981[(8)] = inst_22947__$1);

return statearr_22981;
})();
var statearr_22982_23004 = state_22970__$1;
(statearr_22982_23004[(2)] = null);

(statearr_22982_23004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (9))){
var state_22970__$1 = state_22970;
var statearr_22983_23005 = state_22970__$1;
(statearr_22983_23005[(2)] = null);

(statearr_22983_23005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (5))){
var state_22970__$1 = state_22970;
var statearr_22984_23006 = state_22970__$1;
(statearr_22984_23006[(2)] = null);

(statearr_22984_23006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (10))){
var inst_22962 = (state_22970[(2)]);
var state_22970__$1 = state_22970;
var statearr_22985_23007 = state_22970__$1;
(statearr_22985_23007[(2)] = inst_22962);

(statearr_22985_23007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22971 === (8))){
var inst_22952 = (state_22970[(7)]);
var state_22970__$1 = state_22970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22970__$1,(11),out,inst_22952);
} else {
return null;
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
}
});})(c__20833__auto___22997,out))
;
return ((function (switch__20721__auto__,c__20833__auto___22997,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_22989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22989[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_22989[(1)] = (1));

return statearr_22989;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_22970){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_22970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e22990){if((e22990 instanceof Object)){
var ex__20725__auto__ = e22990;
var statearr_22991_23008 = state_22970;
(statearr_22991_23008[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23009 = state_22970;
state_22970 = G__23009;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_22970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_22970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___22997,out))
})();
var state__20835__auto__ = (function (){var statearr_22992 = f__20834__auto__.call(null);
(statearr_22992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___22997);

return statearr_22992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___22997,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23017 = (function (map_LT_,f,ch,meta23018){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23018 = meta23018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23019,meta23018__$1){
var self__ = this;
var _23019__$1 = this;
return (new cljs.core.async.t_cljs$core$async23017(self__.map_LT_,self__.f,self__.ch,meta23018__$1));
});

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23019){
var self__ = this;
var _23019__$1 = this;
return self__.meta23018;
});

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23020 = (function (map_LT_,f,ch,meta23018,_,fn1,meta23021){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23018 = meta23018;
this._ = _;
this.fn1 = fn1;
this.meta23021 = meta23021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23022,meta23021__$1){
var self__ = this;
var _23022__$1 = this;
return (new cljs.core.async.t_cljs$core$async23020(self__.map_LT_,self__.f,self__.ch,self__.meta23018,self__._,self__.fn1,meta23021__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23022){
var self__ = this;
var _23022__$1 = this;
return self__.meta23021;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23010_SHARP_){
return f1.call(null,(((p1__23010_SHARP_ == null))?null:self__.f.call(null,p1__23010_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23018","meta23018",2143515177,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23017","cljs.core.async/t_cljs$core$async23017",-1744374959,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23021","meta23021",-36840858,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23020";

cljs.core.async.t_cljs$core$async23020.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async23020");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23020 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23020(map_LT___$1,f__$1,ch__$1,meta23018__$1,___$2,fn1__$1,meta23021){
return (new cljs.core.async.t_cljs$core$async23020(map_LT___$1,f__$1,ch__$1,meta23018__$1,___$2,fn1__$1,meta23021));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23020(self__.map_LT_,self__.f,self__.ch,self__.meta23018,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16820__auto__ = ret;
if(cljs.core.truth_(and__16820__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16820__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23017.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23018","meta23018",2143515177,null)], null);
});

cljs.core.async.t_cljs$core$async23017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23017";

cljs.core.async.t_cljs$core$async23017.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async23017");
});

cljs.core.async.__GT_t_cljs$core$async23017 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23017(map_LT___$1,f__$1,ch__$1,meta23018){
return (new cljs.core.async.t_cljs$core$async23017(map_LT___$1,f__$1,ch__$1,meta23018));
});

}

return (new cljs.core.async.t_cljs$core$async23017(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23026 = (function (map_GT_,f,ch,meta23027){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23027 = meta23027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23028,meta23027__$1){
var self__ = this;
var _23028__$1 = this;
return (new cljs.core.async.t_cljs$core$async23026(self__.map_GT_,self__.f,self__.ch,meta23027__$1));
});

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23028){
var self__ = this;
var _23028__$1 = this;
return self__.meta23027;
});

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23027","meta23027",1209960957,null)], null);
});

cljs.core.async.t_cljs$core$async23026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23026";

cljs.core.async.t_cljs$core$async23026.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async23026");
});

cljs.core.async.__GT_t_cljs$core$async23026 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23026(map_GT___$1,f__$1,ch__$1,meta23027){
return (new cljs.core.async.t_cljs$core$async23026(map_GT___$1,f__$1,ch__$1,meta23027));
});

}

return (new cljs.core.async.t_cljs$core$async23026(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23032 = (function (filter_GT_,p,ch,meta23033){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23033 = meta23033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23034,meta23033__$1){
var self__ = this;
var _23034__$1 = this;
return (new cljs.core.async.t_cljs$core$async23032(self__.filter_GT_,self__.p,self__.ch,meta23033__$1));
});

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23034){
var self__ = this;
var _23034__$1 = this;
return self__.meta23033;
});

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23033","meta23033",-686552332,null)], null);
});

cljs.core.async.t_cljs$core$async23032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23032";

cljs.core.async.t_cljs$core$async23032.cljs$lang$ctorPrWriter = (function (this__17430__auto__,writer__17431__auto__,opt__17432__auto__){
return cljs.core._write.call(null,writer__17431__auto__,"cljs.core.async/t_cljs$core$async23032");
});

cljs.core.async.__GT_t_cljs$core$async23032 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23032(filter_GT___$1,p__$1,ch__$1,meta23033){
return (new cljs.core.async.t_cljs$core$async23032(filter_GT___$1,p__$1,ch__$1,meta23033));
});

}

return (new cljs.core.async.t_cljs$core$async23032(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23035 = [];
var len__17890__auto___23079 = arguments.length;
var i__17891__auto___23080 = (0);
while(true){
if((i__17891__auto___23080 < len__17890__auto___23079)){
args23035.push((arguments[i__17891__auto___23080]));

var G__23081 = (i__17891__auto___23080 + (1));
i__17891__auto___23080 = G__23081;
continue;
} else {
}
break;
}

var G__23037 = args23035.length;
switch (G__23037) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23035.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___23083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___23083,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___23083,out){
return (function (state_23058){
var state_val_23059 = (state_23058[(1)]);
if((state_val_23059 === (7))){
var inst_23054 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23060_23084 = state_23058__$1;
(statearr_23060_23084[(2)] = inst_23054);

(statearr_23060_23084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (1))){
var state_23058__$1 = state_23058;
var statearr_23061_23085 = state_23058__$1;
(statearr_23061_23085[(2)] = null);

(statearr_23061_23085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (4))){
var inst_23040 = (state_23058[(7)]);
var inst_23040__$1 = (state_23058[(2)]);
var inst_23041 = (inst_23040__$1 == null);
var state_23058__$1 = (function (){var statearr_23062 = state_23058;
(statearr_23062[(7)] = inst_23040__$1);

return statearr_23062;
})();
if(cljs.core.truth_(inst_23041)){
var statearr_23063_23086 = state_23058__$1;
(statearr_23063_23086[(1)] = (5));

} else {
var statearr_23064_23087 = state_23058__$1;
(statearr_23064_23087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (6))){
var inst_23040 = (state_23058[(7)]);
var inst_23045 = p.call(null,inst_23040);
var state_23058__$1 = state_23058;
if(cljs.core.truth_(inst_23045)){
var statearr_23065_23088 = state_23058__$1;
(statearr_23065_23088[(1)] = (8));

} else {
var statearr_23066_23089 = state_23058__$1;
(statearr_23066_23089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (3))){
var inst_23056 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23058__$1,inst_23056);
} else {
if((state_val_23059 === (2))){
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23058__$1,(4),ch);
} else {
if((state_val_23059 === (11))){
var inst_23048 = (state_23058[(2)]);
var state_23058__$1 = state_23058;
var statearr_23067_23090 = state_23058__$1;
(statearr_23067_23090[(2)] = inst_23048);

(statearr_23067_23090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (9))){
var state_23058__$1 = state_23058;
var statearr_23068_23091 = state_23058__$1;
(statearr_23068_23091[(2)] = null);

(statearr_23068_23091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (5))){
var inst_23043 = cljs.core.async.close_BANG_.call(null,out);
var state_23058__$1 = state_23058;
var statearr_23069_23092 = state_23058__$1;
(statearr_23069_23092[(2)] = inst_23043);

(statearr_23069_23092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (10))){
var inst_23051 = (state_23058[(2)]);
var state_23058__$1 = (function (){var statearr_23070 = state_23058;
(statearr_23070[(8)] = inst_23051);

return statearr_23070;
})();
var statearr_23071_23093 = state_23058__$1;
(statearr_23071_23093[(2)] = null);

(statearr_23071_23093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (8))){
var inst_23040 = (state_23058[(7)]);
var state_23058__$1 = state_23058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23058__$1,(11),out,inst_23040);
} else {
return null;
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
}
});})(c__20833__auto___23083,out))
;
return ((function (switch__20721__auto__,c__20833__auto___23083,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_23075 = [null,null,null,null,null,null,null,null,null];
(statearr_23075[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_23075[(1)] = (1));

return statearr_23075;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_23058){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_23058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e23076){if((e23076 instanceof Object)){
var ex__20725__auto__ = e23076;
var statearr_23077_23094 = state_23058;
(statearr_23077_23094[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23095 = state_23058;
state_23058 = G__23095;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_23058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_23058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___23083,out))
})();
var state__20835__auto__ = (function (){var statearr_23078 = f__20834__auto__.call(null);
(statearr_23078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___23083);

return statearr_23078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___23083,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23096 = [];
var len__17890__auto___23099 = arguments.length;
var i__17891__auto___23100 = (0);
while(true){
if((i__17891__auto___23100 < len__17890__auto___23099)){
args23096.push((arguments[i__17891__auto___23100]));

var G__23101 = (i__17891__auto___23100 + (1));
i__17891__auto___23100 = G__23101;
continue;
} else {
}
break;
}

var G__23098 = args23096.length;
switch (G__23098) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23096.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_23268){
var state_val_23269 = (state_23268[(1)]);
if((state_val_23269 === (7))){
var inst_23264 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23270_23311 = state_23268__$1;
(statearr_23270_23311[(2)] = inst_23264);

(statearr_23270_23311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (20))){
var inst_23234 = (state_23268[(7)]);
var inst_23245 = (state_23268[(2)]);
var inst_23246 = cljs.core.next.call(null,inst_23234);
var inst_23220 = inst_23246;
var inst_23221 = null;
var inst_23222 = (0);
var inst_23223 = (0);
var state_23268__$1 = (function (){var statearr_23271 = state_23268;
(statearr_23271[(8)] = inst_23223);

(statearr_23271[(9)] = inst_23222);

(statearr_23271[(10)] = inst_23220);

(statearr_23271[(11)] = inst_23245);

(statearr_23271[(12)] = inst_23221);

return statearr_23271;
})();
var statearr_23272_23312 = state_23268__$1;
(statearr_23272_23312[(2)] = null);

(statearr_23272_23312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (1))){
var state_23268__$1 = state_23268;
var statearr_23273_23313 = state_23268__$1;
(statearr_23273_23313[(2)] = null);

(statearr_23273_23313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (4))){
var inst_23209 = (state_23268[(13)]);
var inst_23209__$1 = (state_23268[(2)]);
var inst_23210 = (inst_23209__$1 == null);
var state_23268__$1 = (function (){var statearr_23274 = state_23268;
(statearr_23274[(13)] = inst_23209__$1);

return statearr_23274;
})();
if(cljs.core.truth_(inst_23210)){
var statearr_23275_23314 = state_23268__$1;
(statearr_23275_23314[(1)] = (5));

} else {
var statearr_23276_23315 = state_23268__$1;
(statearr_23276_23315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (15))){
var state_23268__$1 = state_23268;
var statearr_23280_23316 = state_23268__$1;
(statearr_23280_23316[(2)] = null);

(statearr_23280_23316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (21))){
var state_23268__$1 = state_23268;
var statearr_23281_23317 = state_23268__$1;
(statearr_23281_23317[(2)] = null);

(statearr_23281_23317[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (13))){
var inst_23223 = (state_23268[(8)]);
var inst_23222 = (state_23268[(9)]);
var inst_23220 = (state_23268[(10)]);
var inst_23221 = (state_23268[(12)]);
var inst_23230 = (state_23268[(2)]);
var inst_23231 = (inst_23223 + (1));
var tmp23277 = inst_23222;
var tmp23278 = inst_23220;
var tmp23279 = inst_23221;
var inst_23220__$1 = tmp23278;
var inst_23221__$1 = tmp23279;
var inst_23222__$1 = tmp23277;
var inst_23223__$1 = inst_23231;
var state_23268__$1 = (function (){var statearr_23282 = state_23268;
(statearr_23282[(14)] = inst_23230);

(statearr_23282[(8)] = inst_23223__$1);

(statearr_23282[(9)] = inst_23222__$1);

(statearr_23282[(10)] = inst_23220__$1);

(statearr_23282[(12)] = inst_23221__$1);

return statearr_23282;
})();
var statearr_23283_23318 = state_23268__$1;
(statearr_23283_23318[(2)] = null);

(statearr_23283_23318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (22))){
var state_23268__$1 = state_23268;
var statearr_23284_23319 = state_23268__$1;
(statearr_23284_23319[(2)] = null);

(statearr_23284_23319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (6))){
var inst_23209 = (state_23268[(13)]);
var inst_23218 = f.call(null,inst_23209);
var inst_23219 = cljs.core.seq.call(null,inst_23218);
var inst_23220 = inst_23219;
var inst_23221 = null;
var inst_23222 = (0);
var inst_23223 = (0);
var state_23268__$1 = (function (){var statearr_23285 = state_23268;
(statearr_23285[(8)] = inst_23223);

(statearr_23285[(9)] = inst_23222);

(statearr_23285[(10)] = inst_23220);

(statearr_23285[(12)] = inst_23221);

return statearr_23285;
})();
var statearr_23286_23320 = state_23268__$1;
(statearr_23286_23320[(2)] = null);

(statearr_23286_23320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (17))){
var inst_23234 = (state_23268[(7)]);
var inst_23238 = cljs.core.chunk_first.call(null,inst_23234);
var inst_23239 = cljs.core.chunk_rest.call(null,inst_23234);
var inst_23240 = cljs.core.count.call(null,inst_23238);
var inst_23220 = inst_23239;
var inst_23221 = inst_23238;
var inst_23222 = inst_23240;
var inst_23223 = (0);
var state_23268__$1 = (function (){var statearr_23287 = state_23268;
(statearr_23287[(8)] = inst_23223);

(statearr_23287[(9)] = inst_23222);

(statearr_23287[(10)] = inst_23220);

(statearr_23287[(12)] = inst_23221);

return statearr_23287;
})();
var statearr_23288_23321 = state_23268__$1;
(statearr_23288_23321[(2)] = null);

(statearr_23288_23321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (3))){
var inst_23266 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23268__$1,inst_23266);
} else {
if((state_val_23269 === (12))){
var inst_23254 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23289_23322 = state_23268__$1;
(statearr_23289_23322[(2)] = inst_23254);

(statearr_23289_23322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (2))){
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23268__$1,(4),in$);
} else {
if((state_val_23269 === (23))){
var inst_23262 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23290_23323 = state_23268__$1;
(statearr_23290_23323[(2)] = inst_23262);

(statearr_23290_23323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (19))){
var inst_23249 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23291_23324 = state_23268__$1;
(statearr_23291_23324[(2)] = inst_23249);

(statearr_23291_23324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (11))){
var inst_23234 = (state_23268[(7)]);
var inst_23220 = (state_23268[(10)]);
var inst_23234__$1 = cljs.core.seq.call(null,inst_23220);
var state_23268__$1 = (function (){var statearr_23292 = state_23268;
(statearr_23292[(7)] = inst_23234__$1);

return statearr_23292;
})();
if(inst_23234__$1){
var statearr_23293_23325 = state_23268__$1;
(statearr_23293_23325[(1)] = (14));

} else {
var statearr_23294_23326 = state_23268__$1;
(statearr_23294_23326[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (9))){
var inst_23256 = (state_23268[(2)]);
var inst_23257 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23268__$1 = (function (){var statearr_23295 = state_23268;
(statearr_23295[(15)] = inst_23256);

return statearr_23295;
})();
if(cljs.core.truth_(inst_23257)){
var statearr_23296_23327 = state_23268__$1;
(statearr_23296_23327[(1)] = (21));

} else {
var statearr_23297_23328 = state_23268__$1;
(statearr_23297_23328[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (5))){
var inst_23212 = cljs.core.async.close_BANG_.call(null,out);
var state_23268__$1 = state_23268;
var statearr_23298_23329 = state_23268__$1;
(statearr_23298_23329[(2)] = inst_23212);

(statearr_23298_23329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (14))){
var inst_23234 = (state_23268[(7)]);
var inst_23236 = cljs.core.chunked_seq_QMARK_.call(null,inst_23234);
var state_23268__$1 = state_23268;
if(inst_23236){
var statearr_23299_23330 = state_23268__$1;
(statearr_23299_23330[(1)] = (17));

} else {
var statearr_23300_23331 = state_23268__$1;
(statearr_23300_23331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (16))){
var inst_23252 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23301_23332 = state_23268__$1;
(statearr_23301_23332[(2)] = inst_23252);

(statearr_23301_23332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23269 === (10))){
var inst_23223 = (state_23268[(8)]);
var inst_23221 = (state_23268[(12)]);
var inst_23228 = cljs.core._nth.call(null,inst_23221,inst_23223);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23268__$1,(13),out,inst_23228);
} else {
if((state_val_23269 === (18))){
var inst_23234 = (state_23268[(7)]);
var inst_23243 = cljs.core.first.call(null,inst_23234);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23268__$1,(20),out,inst_23243);
} else {
if((state_val_23269 === (8))){
var inst_23223 = (state_23268[(8)]);
var inst_23222 = (state_23268[(9)]);
var inst_23225 = (inst_23223 < inst_23222);
var inst_23226 = inst_23225;
var state_23268__$1 = state_23268;
if(cljs.core.truth_(inst_23226)){
var statearr_23302_23333 = state_23268__$1;
(statearr_23302_23333[(1)] = (10));

} else {
var statearr_23303_23334 = state_23268__$1;
(statearr_23303_23334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____0 = (function (){
var statearr_23307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23307[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__);

(statearr_23307[(1)] = (1));

return statearr_23307;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____1 = (function (state_23268){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_23268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e23308){if((e23308 instanceof Object)){
var ex__20725__auto__ = e23308;
var statearr_23309_23335 = state_23268;
(statearr_23309_23335[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23336 = state_23268;
state_23268 = G__23336;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__ = function(state_23268){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____1.call(this,state_23268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20722__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_23310 = f__20834__auto__.call(null);
(statearr_23310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_23310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23337 = [];
var len__17890__auto___23340 = arguments.length;
var i__17891__auto___23341 = (0);
while(true){
if((i__17891__auto___23341 < len__17890__auto___23340)){
args23337.push((arguments[i__17891__auto___23341]));

var G__23342 = (i__17891__auto___23341 + (1));
i__17891__auto___23341 = G__23342;
continue;
} else {
}
break;
}

var G__23339 = args23337.length;
switch (G__23339) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23337.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23344 = [];
var len__17890__auto___23347 = arguments.length;
var i__17891__auto___23348 = (0);
while(true){
if((i__17891__auto___23348 < len__17890__auto___23347)){
args23344.push((arguments[i__17891__auto___23348]));

var G__23349 = (i__17891__auto___23348 + (1));
i__17891__auto___23348 = G__23349;
continue;
} else {
}
break;
}

var G__23346 = args23344.length;
switch (G__23346) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23344.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23351 = [];
var len__17890__auto___23402 = arguments.length;
var i__17891__auto___23403 = (0);
while(true){
if((i__17891__auto___23403 < len__17890__auto___23402)){
args23351.push((arguments[i__17891__auto___23403]));

var G__23404 = (i__17891__auto___23403 + (1));
i__17891__auto___23403 = G__23404;
continue;
} else {
}
break;
}

var G__23353 = args23351.length;
switch (G__23353) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23351.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___23406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___23406,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___23406,out){
return (function (state_23377){
var state_val_23378 = (state_23377[(1)]);
if((state_val_23378 === (7))){
var inst_23372 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23379_23407 = state_23377__$1;
(statearr_23379_23407[(2)] = inst_23372);

(statearr_23379_23407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (1))){
var inst_23354 = null;
var state_23377__$1 = (function (){var statearr_23380 = state_23377;
(statearr_23380[(7)] = inst_23354);

return statearr_23380;
})();
var statearr_23381_23408 = state_23377__$1;
(statearr_23381_23408[(2)] = null);

(statearr_23381_23408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (4))){
var inst_23357 = (state_23377[(8)]);
var inst_23357__$1 = (state_23377[(2)]);
var inst_23358 = (inst_23357__$1 == null);
var inst_23359 = cljs.core.not.call(null,inst_23358);
var state_23377__$1 = (function (){var statearr_23382 = state_23377;
(statearr_23382[(8)] = inst_23357__$1);

return statearr_23382;
})();
if(inst_23359){
var statearr_23383_23409 = state_23377__$1;
(statearr_23383_23409[(1)] = (5));

} else {
var statearr_23384_23410 = state_23377__$1;
(statearr_23384_23410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (6))){
var state_23377__$1 = state_23377;
var statearr_23385_23411 = state_23377__$1;
(statearr_23385_23411[(2)] = null);

(statearr_23385_23411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (3))){
var inst_23374 = (state_23377[(2)]);
var inst_23375 = cljs.core.async.close_BANG_.call(null,out);
var state_23377__$1 = (function (){var statearr_23386 = state_23377;
(statearr_23386[(9)] = inst_23374);

return statearr_23386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23377__$1,inst_23375);
} else {
if((state_val_23378 === (2))){
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23377__$1,(4),ch);
} else {
if((state_val_23378 === (11))){
var inst_23357 = (state_23377[(8)]);
var inst_23366 = (state_23377[(2)]);
var inst_23354 = inst_23357;
var state_23377__$1 = (function (){var statearr_23387 = state_23377;
(statearr_23387[(7)] = inst_23354);

(statearr_23387[(10)] = inst_23366);

return statearr_23387;
})();
var statearr_23388_23412 = state_23377__$1;
(statearr_23388_23412[(2)] = null);

(statearr_23388_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (9))){
var inst_23357 = (state_23377[(8)]);
var state_23377__$1 = state_23377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23377__$1,(11),out,inst_23357);
} else {
if((state_val_23378 === (5))){
var inst_23357 = (state_23377[(8)]);
var inst_23354 = (state_23377[(7)]);
var inst_23361 = cljs.core._EQ_.call(null,inst_23357,inst_23354);
var state_23377__$1 = state_23377;
if(inst_23361){
var statearr_23390_23413 = state_23377__$1;
(statearr_23390_23413[(1)] = (8));

} else {
var statearr_23391_23414 = state_23377__$1;
(statearr_23391_23414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (10))){
var inst_23369 = (state_23377[(2)]);
var state_23377__$1 = state_23377;
var statearr_23392_23415 = state_23377__$1;
(statearr_23392_23415[(2)] = inst_23369);

(statearr_23392_23415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23378 === (8))){
var inst_23354 = (state_23377[(7)]);
var tmp23389 = inst_23354;
var inst_23354__$1 = tmp23389;
var state_23377__$1 = (function (){var statearr_23393 = state_23377;
(statearr_23393[(7)] = inst_23354__$1);

return statearr_23393;
})();
var statearr_23394_23416 = state_23377__$1;
(statearr_23394_23416[(2)] = null);

(statearr_23394_23416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__20833__auto___23406,out))
;
return ((function (switch__20721__auto__,c__20833__auto___23406,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_23398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23398[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_23398[(1)] = (1));

return statearr_23398;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_23377){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_23377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e23399){if((e23399 instanceof Object)){
var ex__20725__auto__ = e23399;
var statearr_23400_23417 = state_23377;
(statearr_23400_23417[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23418 = state_23377;
state_23377 = G__23418;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_23377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_23377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___23406,out))
})();
var state__20835__auto__ = (function (){var statearr_23401 = f__20834__auto__.call(null);
(statearr_23401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___23406);

return statearr_23401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___23406,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23419 = [];
var len__17890__auto___23489 = arguments.length;
var i__17891__auto___23490 = (0);
while(true){
if((i__17891__auto___23490 < len__17890__auto___23489)){
args23419.push((arguments[i__17891__auto___23490]));

var G__23491 = (i__17891__auto___23490 + (1));
i__17891__auto___23490 = G__23491;
continue;
} else {
}
break;
}

var G__23421 = args23419.length;
switch (G__23421) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23419.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___23493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___23493,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___23493,out){
return (function (state_23459){
var state_val_23460 = (state_23459[(1)]);
if((state_val_23460 === (7))){
var inst_23455 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23461_23494 = state_23459__$1;
(statearr_23461_23494[(2)] = inst_23455);

(statearr_23461_23494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (1))){
var inst_23422 = (new Array(n));
var inst_23423 = inst_23422;
var inst_23424 = (0);
var state_23459__$1 = (function (){var statearr_23462 = state_23459;
(statearr_23462[(7)] = inst_23423);

(statearr_23462[(8)] = inst_23424);

return statearr_23462;
})();
var statearr_23463_23495 = state_23459__$1;
(statearr_23463_23495[(2)] = null);

(statearr_23463_23495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (4))){
var inst_23427 = (state_23459[(9)]);
var inst_23427__$1 = (state_23459[(2)]);
var inst_23428 = (inst_23427__$1 == null);
var inst_23429 = cljs.core.not.call(null,inst_23428);
var state_23459__$1 = (function (){var statearr_23464 = state_23459;
(statearr_23464[(9)] = inst_23427__$1);

return statearr_23464;
})();
if(inst_23429){
var statearr_23465_23496 = state_23459__$1;
(statearr_23465_23496[(1)] = (5));

} else {
var statearr_23466_23497 = state_23459__$1;
(statearr_23466_23497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (15))){
var inst_23449 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23467_23498 = state_23459__$1;
(statearr_23467_23498[(2)] = inst_23449);

(statearr_23467_23498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (13))){
var state_23459__$1 = state_23459;
var statearr_23468_23499 = state_23459__$1;
(statearr_23468_23499[(2)] = null);

(statearr_23468_23499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (6))){
var inst_23424 = (state_23459[(8)]);
var inst_23445 = (inst_23424 > (0));
var state_23459__$1 = state_23459;
if(cljs.core.truth_(inst_23445)){
var statearr_23469_23500 = state_23459__$1;
(statearr_23469_23500[(1)] = (12));

} else {
var statearr_23470_23501 = state_23459__$1;
(statearr_23470_23501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (3))){
var inst_23457 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23459__$1,inst_23457);
} else {
if((state_val_23460 === (12))){
var inst_23423 = (state_23459[(7)]);
var inst_23447 = cljs.core.vec.call(null,inst_23423);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23459__$1,(15),out,inst_23447);
} else {
if((state_val_23460 === (2))){
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23459__$1,(4),ch);
} else {
if((state_val_23460 === (11))){
var inst_23439 = (state_23459[(2)]);
var inst_23440 = (new Array(n));
var inst_23423 = inst_23440;
var inst_23424 = (0);
var state_23459__$1 = (function (){var statearr_23471 = state_23459;
(statearr_23471[(7)] = inst_23423);

(statearr_23471[(10)] = inst_23439);

(statearr_23471[(8)] = inst_23424);

return statearr_23471;
})();
var statearr_23472_23502 = state_23459__$1;
(statearr_23472_23502[(2)] = null);

(statearr_23472_23502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (9))){
var inst_23423 = (state_23459[(7)]);
var inst_23437 = cljs.core.vec.call(null,inst_23423);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23459__$1,(11),out,inst_23437);
} else {
if((state_val_23460 === (5))){
var inst_23423 = (state_23459[(7)]);
var inst_23432 = (state_23459[(11)]);
var inst_23424 = (state_23459[(8)]);
var inst_23427 = (state_23459[(9)]);
var inst_23431 = (inst_23423[inst_23424] = inst_23427);
var inst_23432__$1 = (inst_23424 + (1));
var inst_23433 = (inst_23432__$1 < n);
var state_23459__$1 = (function (){var statearr_23473 = state_23459;
(statearr_23473[(12)] = inst_23431);

(statearr_23473[(11)] = inst_23432__$1);

return statearr_23473;
})();
if(cljs.core.truth_(inst_23433)){
var statearr_23474_23503 = state_23459__$1;
(statearr_23474_23503[(1)] = (8));

} else {
var statearr_23475_23504 = state_23459__$1;
(statearr_23475_23504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (14))){
var inst_23452 = (state_23459[(2)]);
var inst_23453 = cljs.core.async.close_BANG_.call(null,out);
var state_23459__$1 = (function (){var statearr_23477 = state_23459;
(statearr_23477[(13)] = inst_23452);

return statearr_23477;
})();
var statearr_23478_23505 = state_23459__$1;
(statearr_23478_23505[(2)] = inst_23453);

(statearr_23478_23505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (10))){
var inst_23443 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23479_23506 = state_23459__$1;
(statearr_23479_23506[(2)] = inst_23443);

(statearr_23479_23506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (8))){
var inst_23423 = (state_23459[(7)]);
var inst_23432 = (state_23459[(11)]);
var tmp23476 = inst_23423;
var inst_23423__$1 = tmp23476;
var inst_23424 = inst_23432;
var state_23459__$1 = (function (){var statearr_23480 = state_23459;
(statearr_23480[(7)] = inst_23423__$1);

(statearr_23480[(8)] = inst_23424);

return statearr_23480;
})();
var statearr_23481_23507 = state_23459__$1;
(statearr_23481_23507[(2)] = null);

(statearr_23481_23507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20833__auto___23493,out))
;
return ((function (switch__20721__auto__,c__20833__auto___23493,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_23485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23485[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_23485[(1)] = (1));

return statearr_23485;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_23459){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_23459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e23486){if((e23486 instanceof Object)){
var ex__20725__auto__ = e23486;
var statearr_23487_23508 = state_23459;
(statearr_23487_23508[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23509 = state_23459;
state_23459 = G__23509;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_23459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_23459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___23493,out))
})();
var state__20835__auto__ = (function (){var statearr_23488 = f__20834__auto__.call(null);
(statearr_23488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___23493);

return statearr_23488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___23493,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23510 = [];
var len__17890__auto___23584 = arguments.length;
var i__17891__auto___23585 = (0);
while(true){
if((i__17891__auto___23585 < len__17890__auto___23584)){
args23510.push((arguments[i__17891__auto___23585]));

var G__23586 = (i__17891__auto___23585 + (1));
i__17891__auto___23585 = G__23586;
continue;
} else {
}
break;
}

var G__23512 = args23510.length;
switch (G__23512) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23510.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20833__auto___23588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___23588,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___23588,out){
return (function (state_23554){
var state_val_23555 = (state_23554[(1)]);
if((state_val_23555 === (7))){
var inst_23550 = (state_23554[(2)]);
var state_23554__$1 = state_23554;
var statearr_23556_23589 = state_23554__$1;
(statearr_23556_23589[(2)] = inst_23550);

(statearr_23556_23589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (1))){
var inst_23513 = [];
var inst_23514 = inst_23513;
var inst_23515 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23554__$1 = (function (){var statearr_23557 = state_23554;
(statearr_23557[(7)] = inst_23514);

(statearr_23557[(8)] = inst_23515);

return statearr_23557;
})();
var statearr_23558_23590 = state_23554__$1;
(statearr_23558_23590[(2)] = null);

(statearr_23558_23590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (4))){
var inst_23518 = (state_23554[(9)]);
var inst_23518__$1 = (state_23554[(2)]);
var inst_23519 = (inst_23518__$1 == null);
var inst_23520 = cljs.core.not.call(null,inst_23519);
var state_23554__$1 = (function (){var statearr_23559 = state_23554;
(statearr_23559[(9)] = inst_23518__$1);

return statearr_23559;
})();
if(inst_23520){
var statearr_23560_23591 = state_23554__$1;
(statearr_23560_23591[(1)] = (5));

} else {
var statearr_23561_23592 = state_23554__$1;
(statearr_23561_23592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (15))){
var inst_23544 = (state_23554[(2)]);
var state_23554__$1 = state_23554;
var statearr_23562_23593 = state_23554__$1;
(statearr_23562_23593[(2)] = inst_23544);

(statearr_23562_23593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (13))){
var state_23554__$1 = state_23554;
var statearr_23563_23594 = state_23554__$1;
(statearr_23563_23594[(2)] = null);

(statearr_23563_23594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (6))){
var inst_23514 = (state_23554[(7)]);
var inst_23539 = inst_23514.length;
var inst_23540 = (inst_23539 > (0));
var state_23554__$1 = state_23554;
if(cljs.core.truth_(inst_23540)){
var statearr_23564_23595 = state_23554__$1;
(statearr_23564_23595[(1)] = (12));

} else {
var statearr_23565_23596 = state_23554__$1;
(statearr_23565_23596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (3))){
var inst_23552 = (state_23554[(2)]);
var state_23554__$1 = state_23554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23554__$1,inst_23552);
} else {
if((state_val_23555 === (12))){
var inst_23514 = (state_23554[(7)]);
var inst_23542 = cljs.core.vec.call(null,inst_23514);
var state_23554__$1 = state_23554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23554__$1,(15),out,inst_23542);
} else {
if((state_val_23555 === (2))){
var state_23554__$1 = state_23554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23554__$1,(4),ch);
} else {
if((state_val_23555 === (11))){
var inst_23522 = (state_23554[(10)]);
var inst_23518 = (state_23554[(9)]);
var inst_23532 = (state_23554[(2)]);
var inst_23533 = [];
var inst_23534 = inst_23533.push(inst_23518);
var inst_23514 = inst_23533;
var inst_23515 = inst_23522;
var state_23554__$1 = (function (){var statearr_23566 = state_23554;
(statearr_23566[(7)] = inst_23514);

(statearr_23566[(11)] = inst_23532);

(statearr_23566[(8)] = inst_23515);

(statearr_23566[(12)] = inst_23534);

return statearr_23566;
})();
var statearr_23567_23597 = state_23554__$1;
(statearr_23567_23597[(2)] = null);

(statearr_23567_23597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (9))){
var inst_23514 = (state_23554[(7)]);
var inst_23530 = cljs.core.vec.call(null,inst_23514);
var state_23554__$1 = state_23554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23554__$1,(11),out,inst_23530);
} else {
if((state_val_23555 === (5))){
var inst_23522 = (state_23554[(10)]);
var inst_23518 = (state_23554[(9)]);
var inst_23515 = (state_23554[(8)]);
var inst_23522__$1 = f.call(null,inst_23518);
var inst_23523 = cljs.core._EQ_.call(null,inst_23522__$1,inst_23515);
var inst_23524 = cljs.core.keyword_identical_QMARK_.call(null,inst_23515,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23525 = (inst_23523) || (inst_23524);
var state_23554__$1 = (function (){var statearr_23568 = state_23554;
(statearr_23568[(10)] = inst_23522__$1);

return statearr_23568;
})();
if(cljs.core.truth_(inst_23525)){
var statearr_23569_23598 = state_23554__$1;
(statearr_23569_23598[(1)] = (8));

} else {
var statearr_23570_23599 = state_23554__$1;
(statearr_23570_23599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (14))){
var inst_23547 = (state_23554[(2)]);
var inst_23548 = cljs.core.async.close_BANG_.call(null,out);
var state_23554__$1 = (function (){var statearr_23572 = state_23554;
(statearr_23572[(13)] = inst_23547);

return statearr_23572;
})();
var statearr_23573_23600 = state_23554__$1;
(statearr_23573_23600[(2)] = inst_23548);

(statearr_23573_23600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (10))){
var inst_23537 = (state_23554[(2)]);
var state_23554__$1 = state_23554;
var statearr_23574_23601 = state_23554__$1;
(statearr_23574_23601[(2)] = inst_23537);

(statearr_23574_23601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23555 === (8))){
var inst_23514 = (state_23554[(7)]);
var inst_23522 = (state_23554[(10)]);
var inst_23518 = (state_23554[(9)]);
var inst_23527 = inst_23514.push(inst_23518);
var tmp23571 = inst_23514;
var inst_23514__$1 = tmp23571;
var inst_23515 = inst_23522;
var state_23554__$1 = (function (){var statearr_23575 = state_23554;
(statearr_23575[(7)] = inst_23514__$1);

(statearr_23575[(14)] = inst_23527);

(statearr_23575[(8)] = inst_23515);

return statearr_23575;
})();
var statearr_23576_23602 = state_23554__$1;
(statearr_23576_23602[(2)] = null);

(statearr_23576_23602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});})(c__20833__auto___23588,out))
;
return ((function (switch__20721__auto__,c__20833__auto___23588,out){
return (function() {
var cljs$core$async$state_machine__20722__auto__ = null;
var cljs$core$async$state_machine__20722__auto____0 = (function (){
var statearr_23580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23580[(0)] = cljs$core$async$state_machine__20722__auto__);

(statearr_23580[(1)] = (1));

return statearr_23580;
});
var cljs$core$async$state_machine__20722__auto____1 = (function (state_23554){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_23554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e23581){if((e23581 instanceof Object)){
var ex__20725__auto__ = e23581;
var statearr_23582_23603 = state_23554;
(statearr_23582_23603[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23604 = state_23554;
state_23554 = G__23604;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
cljs$core$async$state_machine__20722__auto__ = function(state_23554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20722__auto____1.call(this,state_23554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20722__auto____0;
cljs$core$async$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20722__auto____1;
return cljs$core$async$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___23588,out))
})();
var state__20835__auto__ = (function (){var statearr_23583 = f__20834__auto__.call(null);
(statearr_23583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___23588);

return statearr_23583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___23588,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map