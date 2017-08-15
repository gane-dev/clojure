// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25373 = cljs.core._EQ_;
var expr__25374 = (function (){var or__16832__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e25377){if((e25377 instanceof Error)){
var e = e25377;
return false;
} else {
throw e25377;

}
}})();
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25373.call(null,"true",expr__25374))){
return true;
} else {
if(cljs.core.truth_(pred__25373.call(null,"false",expr__25374))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25374)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25379){if((e25379 instanceof Error)){
var e = e25379;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25379;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17897__auto__ = [];
var len__17890__auto___25381 = arguments.length;
var i__17891__auto___25382 = (0);
while(true){
if((i__17891__auto___25382 < len__17890__auto___25381)){
args__17897__auto__.push((arguments[i__17891__auto___25382]));

var G__25383 = (i__17891__auto___25382 + (1));
i__17891__auto___25382 = G__25383;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25380){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25380));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25384){
var map__25387 = p__25384;
var map__25387__$1 = ((((!((map__25387 == null)))?((((map__25387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25387):map__25387);
var message = cljs.core.get.call(null,map__25387__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25387__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16832__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16820__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16820__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16820__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20833__auto___25549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___25549,ch){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___25549,ch){
return (function (state_25518){
var state_val_25519 = (state_25518[(1)]);
if((state_val_25519 === (7))){
var inst_25514 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
var statearr_25520_25550 = state_25518__$1;
(statearr_25520_25550[(2)] = inst_25514);

(statearr_25520_25550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (1))){
var state_25518__$1 = state_25518;
var statearr_25521_25551 = state_25518__$1;
(statearr_25521_25551[(2)] = null);

(statearr_25521_25551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (4))){
var inst_25471 = (state_25518[(7)]);
var inst_25471__$1 = (state_25518[(2)]);
var state_25518__$1 = (function (){var statearr_25522 = state_25518;
(statearr_25522[(7)] = inst_25471__$1);

return statearr_25522;
})();
if(cljs.core.truth_(inst_25471__$1)){
var statearr_25523_25552 = state_25518__$1;
(statearr_25523_25552[(1)] = (5));

} else {
var statearr_25524_25553 = state_25518__$1;
(statearr_25524_25553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (15))){
var inst_25478 = (state_25518[(8)]);
var inst_25493 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25478);
var inst_25494 = cljs.core.first.call(null,inst_25493);
var inst_25495 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25494);
var inst_25496 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25495)].join('');
var inst_25497 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25496);
var state_25518__$1 = state_25518;
var statearr_25525_25554 = state_25518__$1;
(statearr_25525_25554[(2)] = inst_25497);

(statearr_25525_25554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (13))){
var inst_25502 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
var statearr_25526_25555 = state_25518__$1;
(statearr_25526_25555[(2)] = inst_25502);

(statearr_25526_25555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (6))){
var state_25518__$1 = state_25518;
var statearr_25527_25556 = state_25518__$1;
(statearr_25527_25556[(2)] = null);

(statearr_25527_25556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (17))){
var inst_25500 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
var statearr_25528_25557 = state_25518__$1;
(statearr_25528_25557[(2)] = inst_25500);

(statearr_25528_25557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (3))){
var inst_25516 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25518__$1,inst_25516);
} else {
if((state_val_25519 === (12))){
var inst_25477 = (state_25518[(9)]);
var inst_25491 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25477,opts);
var state_25518__$1 = state_25518;
if(cljs.core.truth_(inst_25491)){
var statearr_25529_25558 = state_25518__$1;
(statearr_25529_25558[(1)] = (15));

} else {
var statearr_25530_25559 = state_25518__$1;
(statearr_25530_25559[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (2))){
var state_25518__$1 = state_25518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25518__$1,(4),ch);
} else {
if((state_val_25519 === (11))){
var inst_25478 = (state_25518[(8)]);
var inst_25483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25484 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25478);
var inst_25485 = cljs.core.async.timeout.call(null,(1000));
var inst_25486 = [inst_25484,inst_25485];
var inst_25487 = (new cljs.core.PersistentVector(null,2,(5),inst_25483,inst_25486,null));
var state_25518__$1 = state_25518;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25518__$1,(14),inst_25487);
} else {
if((state_val_25519 === (9))){
var inst_25478 = (state_25518[(8)]);
var inst_25504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25505 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25478);
var inst_25506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25505);
var inst_25507 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25506)].join('');
var inst_25508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25507);
var state_25518__$1 = (function (){var statearr_25531 = state_25518;
(statearr_25531[(10)] = inst_25504);

return statearr_25531;
})();
var statearr_25532_25560 = state_25518__$1;
(statearr_25532_25560[(2)] = inst_25508);

(statearr_25532_25560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (5))){
var inst_25471 = (state_25518[(7)]);
var inst_25473 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25474 = (new cljs.core.PersistentArrayMap(null,2,inst_25473,null));
var inst_25475 = (new cljs.core.PersistentHashSet(null,inst_25474,null));
var inst_25476 = figwheel.client.focus_msgs.call(null,inst_25475,inst_25471);
var inst_25477 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25476);
var inst_25478 = cljs.core.first.call(null,inst_25476);
var inst_25479 = figwheel.client.autoload_QMARK_.call(null);
var state_25518__$1 = (function (){var statearr_25533 = state_25518;
(statearr_25533[(8)] = inst_25478);

(statearr_25533[(9)] = inst_25477);

return statearr_25533;
})();
if(cljs.core.truth_(inst_25479)){
var statearr_25534_25561 = state_25518__$1;
(statearr_25534_25561[(1)] = (8));

} else {
var statearr_25535_25562 = state_25518__$1;
(statearr_25535_25562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (14))){
var inst_25489 = (state_25518[(2)]);
var state_25518__$1 = state_25518;
var statearr_25536_25563 = state_25518__$1;
(statearr_25536_25563[(2)] = inst_25489);

(statearr_25536_25563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (16))){
var state_25518__$1 = state_25518;
var statearr_25537_25564 = state_25518__$1;
(statearr_25537_25564[(2)] = null);

(statearr_25537_25564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (10))){
var inst_25510 = (state_25518[(2)]);
var state_25518__$1 = (function (){var statearr_25538 = state_25518;
(statearr_25538[(11)] = inst_25510);

return statearr_25538;
})();
var statearr_25539_25565 = state_25518__$1;
(statearr_25539_25565[(2)] = null);

(statearr_25539_25565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25519 === (8))){
var inst_25477 = (state_25518[(9)]);
var inst_25481 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25477,opts);
var state_25518__$1 = state_25518;
if(cljs.core.truth_(inst_25481)){
var statearr_25540_25566 = state_25518__$1;
(statearr_25540_25566[(1)] = (11));

} else {
var statearr_25541_25567 = state_25518__$1;
(statearr_25541_25567[(1)] = (12));

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
});})(c__20833__auto___25549,ch))
;
return ((function (switch__20721__auto__,c__20833__auto___25549,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____0 = (function (){
var statearr_25545 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25545[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__);

(statearr_25545[(1)] = (1));

return statearr_25545;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____1 = (function (state_25518){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25546){if((e25546 instanceof Object)){
var ex__20725__auto__ = e25546;
var statearr_25547_25568 = state_25518;
(statearr_25547_25568[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25569 = state_25518;
state_25518 = G__25569;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__ = function(state_25518){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____1.call(this,state_25518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20722__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___25549,ch))
})();
var state__20835__auto__ = (function (){var statearr_25548 = f__20834__auto__.call(null);
(statearr_25548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___25549);

return statearr_25548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___25549,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25570_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25570_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25577 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25577){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25576 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25576;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25575;
}}catch (e25574){if((e25574 instanceof Error)){
var e = e25574;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25577], null));
} else {
var e = e25574;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25577))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25578){
var map__25585 = p__25578;
var map__25585__$1 = ((((!((map__25585 == null)))?((((map__25585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var opts = map__25585__$1;
var build_id = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25585,map__25585__$1,opts,build_id){
return (function (p__25587){
var vec__25588 = p__25587;
var map__25589 = cljs.core.nth.call(null,vec__25588,(0),null);
var map__25589__$1 = ((((!((map__25589 == null)))?((((map__25589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25589):map__25589);
var msg = map__25589__$1;
var msg_name = cljs.core.get.call(null,map__25589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25588,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25588,map__25589,map__25589__$1,msg,msg_name,_,map__25585,map__25585__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25588,map__25589,map__25589__$1,msg,msg_name,_,map__25585,map__25585__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25585,map__25585__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25595){
var vec__25596 = p__25595;
var map__25597 = cljs.core.nth.call(null,vec__25596,(0),null);
var map__25597__$1 = ((((!((map__25597 == null)))?((((map__25597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25597):map__25597);
var msg = map__25597__$1;
var msg_name = cljs.core.get.call(null,map__25597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25596,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25599){
var map__25609 = p__25599;
var map__25609__$1 = ((((!((map__25609 == null)))?((((map__25609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25609):map__25609);
var on_compile_warning = cljs.core.get.call(null,map__25609__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25609__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25609,map__25609__$1,on_compile_warning,on_compile_fail){
return (function (p__25611){
var vec__25612 = p__25611;
var map__25613 = cljs.core.nth.call(null,vec__25612,(0),null);
var map__25613__$1 = ((((!((map__25613 == null)))?((((map__25613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25613):map__25613);
var msg = map__25613__$1;
var msg_name = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25612,(1));
var pred__25615 = cljs.core._EQ_;
var expr__25616 = msg_name;
if(cljs.core.truth_(pred__25615.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25616))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25615.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25616))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25609,map__25609__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__,msg_hist,msg_names,msg){
return (function (state_25832){
var state_val_25833 = (state_25832[(1)]);
if((state_val_25833 === (7))){
var inst_25756 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25756)){
var statearr_25834_25880 = state_25832__$1;
(statearr_25834_25880[(1)] = (8));

} else {
var statearr_25835_25881 = state_25832__$1;
(statearr_25835_25881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (20))){
var inst_25826 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25836_25882 = state_25832__$1;
(statearr_25836_25882[(2)] = inst_25826);

(statearr_25836_25882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (27))){
var inst_25822 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25837_25883 = state_25832__$1;
(statearr_25837_25883[(2)] = inst_25822);

(statearr_25837_25883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (1))){
var inst_25749 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25749)){
var statearr_25838_25884 = state_25832__$1;
(statearr_25838_25884[(1)] = (2));

} else {
var statearr_25839_25885 = state_25832__$1;
(statearr_25839_25885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (24))){
var inst_25824 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25840_25886 = state_25832__$1;
(statearr_25840_25886[(2)] = inst_25824);

(statearr_25840_25886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (4))){
var inst_25830 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25832__$1,inst_25830);
} else {
if((state_val_25833 === (15))){
var inst_25828 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25841_25887 = state_25832__$1;
(statearr_25841_25887[(2)] = inst_25828);

(statearr_25841_25887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (21))){
var inst_25787 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25842_25888 = state_25832__$1;
(statearr_25842_25888[(2)] = inst_25787);

(statearr_25842_25888[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (31))){
var inst_25811 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25811)){
var statearr_25843_25889 = state_25832__$1;
(statearr_25843_25889[(1)] = (34));

} else {
var statearr_25844_25890 = state_25832__$1;
(statearr_25844_25890[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (32))){
var inst_25820 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25845_25891 = state_25832__$1;
(statearr_25845_25891[(2)] = inst_25820);

(statearr_25845_25891[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (33))){
var inst_25809 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25846_25892 = state_25832__$1;
(statearr_25846_25892[(2)] = inst_25809);

(statearr_25846_25892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (13))){
var inst_25770 = figwheel.client.heads_up.clear.call(null);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(16),inst_25770);
} else {
if((state_val_25833 === (22))){
var inst_25791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25792 = figwheel.client.heads_up.append_message.call(null,inst_25791);
var state_25832__$1 = state_25832;
var statearr_25847_25893 = state_25832__$1;
(statearr_25847_25893[(2)] = inst_25792);

(statearr_25847_25893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (36))){
var inst_25818 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25848_25894 = state_25832__$1;
(statearr_25848_25894[(2)] = inst_25818);

(statearr_25848_25894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (29))){
var inst_25802 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25849_25895 = state_25832__$1;
(statearr_25849_25895[(2)] = inst_25802);

(statearr_25849_25895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (6))){
var inst_25751 = (state_25832[(7)]);
var state_25832__$1 = state_25832;
var statearr_25850_25896 = state_25832__$1;
(statearr_25850_25896[(2)] = inst_25751);

(statearr_25850_25896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (28))){
var inst_25798 = (state_25832[(2)]);
var inst_25799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25800 = figwheel.client.heads_up.display_warning.call(null,inst_25799);
var state_25832__$1 = (function (){var statearr_25851 = state_25832;
(statearr_25851[(8)] = inst_25798);

return statearr_25851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(29),inst_25800);
} else {
if((state_val_25833 === (25))){
var inst_25796 = figwheel.client.heads_up.clear.call(null);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(28),inst_25796);
} else {
if((state_val_25833 === (34))){
var inst_25813 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(37),inst_25813);
} else {
if((state_val_25833 === (17))){
var inst_25778 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25852_25897 = state_25832__$1;
(statearr_25852_25897[(2)] = inst_25778);

(statearr_25852_25897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (3))){
var inst_25768 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25768)){
var statearr_25853_25898 = state_25832__$1;
(statearr_25853_25898[(1)] = (13));

} else {
var statearr_25854_25899 = state_25832__$1;
(statearr_25854_25899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (12))){
var inst_25764 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25855_25900 = state_25832__$1;
(statearr_25855_25900[(2)] = inst_25764);

(statearr_25855_25900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (2))){
var inst_25751 = (state_25832[(7)]);
var inst_25751__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25832__$1 = (function (){var statearr_25856 = state_25832;
(statearr_25856[(7)] = inst_25751__$1);

return statearr_25856;
})();
if(cljs.core.truth_(inst_25751__$1)){
var statearr_25857_25901 = state_25832__$1;
(statearr_25857_25901[(1)] = (5));

} else {
var statearr_25858_25902 = state_25832__$1;
(statearr_25858_25902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (23))){
var inst_25794 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25794)){
var statearr_25859_25903 = state_25832__$1;
(statearr_25859_25903[(1)] = (25));

} else {
var statearr_25860_25904 = state_25832__$1;
(statearr_25860_25904[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (35))){
var state_25832__$1 = state_25832;
var statearr_25861_25905 = state_25832__$1;
(statearr_25861_25905[(2)] = null);

(statearr_25861_25905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (19))){
var inst_25789 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25789)){
var statearr_25862_25906 = state_25832__$1;
(statearr_25862_25906[(1)] = (22));

} else {
var statearr_25863_25907 = state_25832__$1;
(statearr_25863_25907[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (11))){
var inst_25760 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25864_25908 = state_25832__$1;
(statearr_25864_25908[(2)] = inst_25760);

(statearr_25864_25908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (9))){
var inst_25762 = figwheel.client.heads_up.clear.call(null);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(12),inst_25762);
} else {
if((state_val_25833 === (5))){
var inst_25753 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25832__$1 = state_25832;
var statearr_25865_25909 = state_25832__$1;
(statearr_25865_25909[(2)] = inst_25753);

(statearr_25865_25909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (14))){
var inst_25780 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25780)){
var statearr_25866_25910 = state_25832__$1;
(statearr_25866_25910[(1)] = (18));

} else {
var statearr_25867_25911 = state_25832__$1;
(statearr_25867_25911[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (26))){
var inst_25804 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25832__$1 = state_25832;
if(cljs.core.truth_(inst_25804)){
var statearr_25868_25912 = state_25832__$1;
(statearr_25868_25912[(1)] = (30));

} else {
var statearr_25869_25913 = state_25832__$1;
(statearr_25869_25913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (16))){
var inst_25772 = (state_25832[(2)]);
var inst_25773 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25774 = figwheel.client.format_messages.call(null,inst_25773);
var inst_25775 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25776 = figwheel.client.heads_up.display_error.call(null,inst_25774,inst_25775);
var state_25832__$1 = (function (){var statearr_25870 = state_25832;
(statearr_25870[(9)] = inst_25772);

return statearr_25870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(17),inst_25776);
} else {
if((state_val_25833 === (30))){
var inst_25806 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25807 = figwheel.client.heads_up.display_warning.call(null,inst_25806);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(33),inst_25807);
} else {
if((state_val_25833 === (10))){
var inst_25766 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25871_25914 = state_25832__$1;
(statearr_25871_25914[(2)] = inst_25766);

(statearr_25871_25914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (18))){
var inst_25782 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25783 = figwheel.client.format_messages.call(null,inst_25782);
var inst_25784 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25785 = figwheel.client.heads_up.display_error.call(null,inst_25783,inst_25784);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(21),inst_25785);
} else {
if((state_val_25833 === (37))){
var inst_25815 = (state_25832[(2)]);
var state_25832__$1 = state_25832;
var statearr_25872_25915 = state_25832__$1;
(statearr_25872_25915[(2)] = inst_25815);

(statearr_25872_25915[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25833 === (8))){
var inst_25758 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25832__$1 = state_25832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25832__$1,(11),inst_25758);
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
});})(c__20833__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20721__auto__,c__20833__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____0 = (function (){
var statearr_25876 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25876[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__);

(statearr_25876[(1)] = (1));

return statearr_25876;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____1 = (function (state_25832){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25877){if((e25877 instanceof Object)){
var ex__20725__auto__ = e25877;
var statearr_25878_25916 = state_25832;
(statearr_25878_25916[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25917 = state_25832;
state_25832 = G__25917;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__ = function(state_25832){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____1.call(this,state_25832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__,msg_hist,msg_names,msg))
})();
var state__20835__auto__ = (function (){var statearr_25879 = f__20834__auto__.call(null);
(statearr_25879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_25879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__,msg_hist,msg_names,msg))
);

return c__20833__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20833__auto___25980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___25980,ch){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___25980,ch){
return (function (state_25963){
var state_val_25964 = (state_25963[(1)]);
if((state_val_25964 === (1))){
var state_25963__$1 = state_25963;
var statearr_25965_25981 = state_25963__$1;
(statearr_25965_25981[(2)] = null);

(statearr_25965_25981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (2))){
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25963__$1,(4),ch);
} else {
if((state_val_25964 === (3))){
var inst_25961 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25963__$1,inst_25961);
} else {
if((state_val_25964 === (4))){
var inst_25951 = (state_25963[(7)]);
var inst_25951__$1 = (state_25963[(2)]);
var state_25963__$1 = (function (){var statearr_25966 = state_25963;
(statearr_25966[(7)] = inst_25951__$1);

return statearr_25966;
})();
if(cljs.core.truth_(inst_25951__$1)){
var statearr_25967_25982 = state_25963__$1;
(statearr_25967_25982[(1)] = (5));

} else {
var statearr_25968_25983 = state_25963__$1;
(statearr_25968_25983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (5))){
var inst_25951 = (state_25963[(7)]);
var inst_25953 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25951);
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25963__$1,(8),inst_25953);
} else {
if((state_val_25964 === (6))){
var state_25963__$1 = state_25963;
var statearr_25969_25984 = state_25963__$1;
(statearr_25969_25984[(2)] = null);

(statearr_25969_25984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (7))){
var inst_25959 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
var statearr_25970_25985 = state_25963__$1;
(statearr_25970_25985[(2)] = inst_25959);

(statearr_25970_25985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (8))){
var inst_25955 = (state_25963[(2)]);
var state_25963__$1 = (function (){var statearr_25971 = state_25963;
(statearr_25971[(8)] = inst_25955);

return statearr_25971;
})();
var statearr_25972_25986 = state_25963__$1;
(statearr_25972_25986[(2)] = null);

(statearr_25972_25986[(1)] = (2));


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
});})(c__20833__auto___25980,ch))
;
return ((function (switch__20721__auto__,c__20833__auto___25980,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20722__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20722__auto____0 = (function (){
var statearr_25976 = [null,null,null,null,null,null,null,null,null];
(statearr_25976[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20722__auto__);

(statearr_25976[(1)] = (1));

return statearr_25976;
});
var figwheel$client$heads_up_plugin_$_state_machine__20722__auto____1 = (function (state_25963){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25977){if((e25977 instanceof Object)){
var ex__20725__auto__ = e25977;
var statearr_25978_25987 = state_25963;
(statearr_25978_25987[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25988 = state_25963;
state_25963 = G__25988;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20722__auto__ = function(state_25963){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20722__auto____1.call(this,state_25963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20722__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20722__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___25980,ch))
})();
var state__20835__auto__ = (function (){var statearr_25979 = f__20834__auto__.call(null);
(statearr_25979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___25980);

return statearr_25979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___25980,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_26009){
var state_val_26010 = (state_26009[(1)]);
if((state_val_26010 === (1))){
var inst_26004 = cljs.core.async.timeout.call(null,(3000));
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(2),inst_26004);
} else {
if((state_val_26010 === (2))){
var inst_26006 = (state_26009[(2)]);
var inst_26007 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26009__$1 = (function (){var statearr_26011 = state_26009;
(statearr_26011[(7)] = inst_26006);

return statearr_26011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26009__$1,inst_26007);
} else {
return null;
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____0 = (function (){
var statearr_26015 = [null,null,null,null,null,null,null,null];
(statearr_26015[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__);

(statearr_26015[(1)] = (1));

return statearr_26015;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____1 = (function (state_26009){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_26009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e26016){if((e26016 instanceof Object)){
var ex__20725__auto__ = e26016;
var statearr_26017_26019 = state_26009;
(statearr_26017_26019[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26020 = state_26009;
state_26009 = G__26020;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__ = function(state_26009){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____1.call(this,state_26009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20722__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_26018 = f__20834__auto__.call(null);
(statearr_26018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_26018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26021){
var map__26028 = p__26021;
var map__26028__$1 = ((((!((map__26028 == null)))?((((map__26028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26028):map__26028);
var ed = map__26028__$1;
var formatted_exception = cljs.core.get.call(null,map__26028__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26028__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26028__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26030_26034 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26031_26035 = null;
var count__26032_26036 = (0);
var i__26033_26037 = (0);
while(true){
if((i__26033_26037 < count__26032_26036)){
var msg_26038 = cljs.core._nth.call(null,chunk__26031_26035,i__26033_26037);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26038);

var G__26039 = seq__26030_26034;
var G__26040 = chunk__26031_26035;
var G__26041 = count__26032_26036;
var G__26042 = (i__26033_26037 + (1));
seq__26030_26034 = G__26039;
chunk__26031_26035 = G__26040;
count__26032_26036 = G__26041;
i__26033_26037 = G__26042;
continue;
} else {
var temp__4425__auto___26043 = cljs.core.seq.call(null,seq__26030_26034);
if(temp__4425__auto___26043){
var seq__26030_26044__$1 = temp__4425__auto___26043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26030_26044__$1)){
var c__17635__auto___26045 = cljs.core.chunk_first.call(null,seq__26030_26044__$1);
var G__26046 = cljs.core.chunk_rest.call(null,seq__26030_26044__$1);
var G__26047 = c__17635__auto___26045;
var G__26048 = cljs.core.count.call(null,c__17635__auto___26045);
var G__26049 = (0);
seq__26030_26034 = G__26046;
chunk__26031_26035 = G__26047;
count__26032_26036 = G__26048;
i__26033_26037 = G__26049;
continue;
} else {
var msg_26050 = cljs.core.first.call(null,seq__26030_26044__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26050);

var G__26051 = cljs.core.next.call(null,seq__26030_26044__$1);
var G__26052 = null;
var G__26053 = (0);
var G__26054 = (0);
seq__26030_26034 = G__26051;
chunk__26031_26035 = G__26052;
count__26032_26036 = G__26053;
i__26033_26037 = G__26054;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26055){
var map__26058 = p__26055;
var map__26058__$1 = ((((!((map__26058 == null)))?((((map__26058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26058):map__26058);
var w = map__26058__$1;
var message = cljs.core.get.call(null,map__26058__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16820__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16820__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16820__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26066 = cljs.core.seq.call(null,plugins);
var chunk__26067 = null;
var count__26068 = (0);
var i__26069 = (0);
while(true){
if((i__26069 < count__26068)){
var vec__26070 = cljs.core._nth.call(null,chunk__26067,i__26069);
var k = cljs.core.nth.call(null,vec__26070,(0),null);
var plugin = cljs.core.nth.call(null,vec__26070,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26072 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26066,chunk__26067,count__26068,i__26069,pl_26072,vec__26070,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26072.call(null,msg_hist);
});})(seq__26066,chunk__26067,count__26068,i__26069,pl_26072,vec__26070,k,plugin))
);
} else {
}

var G__26073 = seq__26066;
var G__26074 = chunk__26067;
var G__26075 = count__26068;
var G__26076 = (i__26069 + (1));
seq__26066 = G__26073;
chunk__26067 = G__26074;
count__26068 = G__26075;
i__26069 = G__26076;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26066);
if(temp__4425__auto__){
var seq__26066__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26066__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__26066__$1);
var G__26077 = cljs.core.chunk_rest.call(null,seq__26066__$1);
var G__26078 = c__17635__auto__;
var G__26079 = cljs.core.count.call(null,c__17635__auto__);
var G__26080 = (0);
seq__26066 = G__26077;
chunk__26067 = G__26078;
count__26068 = G__26079;
i__26069 = G__26080;
continue;
} else {
var vec__26071 = cljs.core.first.call(null,seq__26066__$1);
var k = cljs.core.nth.call(null,vec__26071,(0),null);
var plugin = cljs.core.nth.call(null,vec__26071,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26081 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26066,chunk__26067,count__26068,i__26069,pl_26081,vec__26071,k,plugin,seq__26066__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26081.call(null,msg_hist);
});})(seq__26066,chunk__26067,count__26068,i__26069,pl_26081,vec__26071,k,plugin,seq__26066__$1,temp__4425__auto__))
);
} else {
}

var G__26082 = cljs.core.next.call(null,seq__26066__$1);
var G__26083 = null;
var G__26084 = (0);
var G__26085 = (0);
seq__26066 = G__26082;
chunk__26067 = G__26083;
count__26068 = G__26084;
i__26069 = G__26085;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26086 = [];
var len__17890__auto___26089 = arguments.length;
var i__17891__auto___26090 = (0);
while(true){
if((i__17891__auto___26090 < len__17890__auto___26089)){
args26086.push((arguments[i__17891__auto___26090]));

var G__26091 = (i__17891__auto___26090 + (1));
i__17891__auto___26090 = G__26091;
continue;
} else {
}
break;
}

var G__26088 = args26086.length;
switch (G__26088) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26086.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17897__auto__ = [];
var len__17890__auto___26097 = arguments.length;
var i__17891__auto___26098 = (0);
while(true){
if((i__17891__auto___26098 < len__17890__auto___26097)){
args__17897__auto__.push((arguments[i__17891__auto___26098]));

var G__26099 = (i__17891__auto___26098 + (1));
i__17891__auto___26098 = G__26099;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((0) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17898__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26094){
var map__26095 = p__26094;
var map__26095__$1 = ((((!((map__26095 == null)))?((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26095):map__26095);
var opts = map__26095__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26093){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26093));
});

//# sourceMappingURL=client.js.map