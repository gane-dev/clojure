// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17897__auto__ = [];
var len__17890__auto___25139 = arguments.length;
var i__17891__auto___25140 = (0);
while(true){
if((i__17891__auto___25140 < len__17890__auto___25139)){
args__17897__auto__.push((arguments[i__17891__auto___25140]));

var G__25141 = (i__17891__auto___25140 + (1));
i__17891__auto___25140 = G__25141;
continue;
} else {
}
break;
}

var argseq__17898__auto__ = ((((2) < args__17897__auto__.length))?(new cljs.core.IndexedSeq(args__17897__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17898__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25131_25142 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25132_25143 = null;
var count__25133_25144 = (0);
var i__25134_25145 = (0);
while(true){
if((i__25134_25145 < count__25133_25144)){
var k_25146 = cljs.core._nth.call(null,chunk__25132_25143,i__25134_25145);
e.setAttribute(cljs.core.name.call(null,k_25146),cljs.core.get.call(null,attrs,k_25146));

var G__25147 = seq__25131_25142;
var G__25148 = chunk__25132_25143;
var G__25149 = count__25133_25144;
var G__25150 = (i__25134_25145 + (1));
seq__25131_25142 = G__25147;
chunk__25132_25143 = G__25148;
count__25133_25144 = G__25149;
i__25134_25145 = G__25150;
continue;
} else {
var temp__4425__auto___25151 = cljs.core.seq.call(null,seq__25131_25142);
if(temp__4425__auto___25151){
var seq__25131_25152__$1 = temp__4425__auto___25151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25131_25152__$1)){
var c__17635__auto___25153 = cljs.core.chunk_first.call(null,seq__25131_25152__$1);
var G__25154 = cljs.core.chunk_rest.call(null,seq__25131_25152__$1);
var G__25155 = c__17635__auto___25153;
var G__25156 = cljs.core.count.call(null,c__17635__auto___25153);
var G__25157 = (0);
seq__25131_25142 = G__25154;
chunk__25132_25143 = G__25155;
count__25133_25144 = G__25156;
i__25134_25145 = G__25157;
continue;
} else {
var k_25158 = cljs.core.first.call(null,seq__25131_25152__$1);
e.setAttribute(cljs.core.name.call(null,k_25158),cljs.core.get.call(null,attrs,k_25158));

var G__25159 = cljs.core.next.call(null,seq__25131_25152__$1);
var G__25160 = null;
var G__25161 = (0);
var G__25162 = (0);
seq__25131_25142 = G__25159;
chunk__25132_25143 = G__25160;
count__25133_25144 = G__25161;
i__25134_25145 = G__25162;
continue;
}
} else {
}
}
break;
}

var seq__25135_25163 = cljs.core.seq.call(null,children);
var chunk__25136_25164 = null;
var count__25137_25165 = (0);
var i__25138_25166 = (0);
while(true){
if((i__25138_25166 < count__25137_25165)){
var ch_25167 = cljs.core._nth.call(null,chunk__25136_25164,i__25138_25166);
e.appendChild(ch_25167);

var G__25168 = seq__25135_25163;
var G__25169 = chunk__25136_25164;
var G__25170 = count__25137_25165;
var G__25171 = (i__25138_25166 + (1));
seq__25135_25163 = G__25168;
chunk__25136_25164 = G__25169;
count__25137_25165 = G__25170;
i__25138_25166 = G__25171;
continue;
} else {
var temp__4425__auto___25172 = cljs.core.seq.call(null,seq__25135_25163);
if(temp__4425__auto___25172){
var seq__25135_25173__$1 = temp__4425__auto___25172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25135_25173__$1)){
var c__17635__auto___25174 = cljs.core.chunk_first.call(null,seq__25135_25173__$1);
var G__25175 = cljs.core.chunk_rest.call(null,seq__25135_25173__$1);
var G__25176 = c__17635__auto___25174;
var G__25177 = cljs.core.count.call(null,c__17635__auto___25174);
var G__25178 = (0);
seq__25135_25163 = G__25175;
chunk__25136_25164 = G__25176;
count__25137_25165 = G__25177;
i__25138_25166 = G__25178;
continue;
} else {
var ch_25179 = cljs.core.first.call(null,seq__25135_25173__$1);
e.appendChild(ch_25179);

var G__25180 = cljs.core.next.call(null,seq__25135_25173__$1);
var G__25181 = null;
var G__25182 = (0);
var G__25183 = (0);
seq__25135_25163 = G__25180;
chunk__25136_25164 = G__25181;
count__25137_25165 = G__25182;
i__25138_25166 = G__25183;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25128){
var G__25129 = cljs.core.first.call(null,seq25128);
var seq25128__$1 = cljs.core.next.call(null,seq25128);
var G__25130 = cljs.core.first.call(null,seq25128__$1);
var seq25128__$2 = cljs.core.next.call(null,seq25128__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25129,G__25130,seq25128__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17749__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__,hierarchy__17749__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17749__auto__,method_table__17745__auto__,prefer_table__17746__auto__,method_cache__17747__auto__,cached_hierarchy__17748__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25184 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25184.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25184.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25184.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25184);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25185,st_map){
var map__25190 = p__25185;
var map__25190__$1 = ((((!((map__25190 == null)))?((((map__25190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25190):map__25190);
var container_el = cljs.core.get.call(null,map__25190__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25190,map__25190__$1,container_el){
return (function (p__25192){
var vec__25193 = p__25192;
var k = cljs.core.nth.call(null,vec__25193,(0),null);
var v = cljs.core.nth.call(null,vec__25193,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25190,map__25190__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25194,dom_str){
var map__25197 = p__25194;
var map__25197__$1 = ((((!((map__25197 == null)))?((((map__25197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25197):map__25197);
var c = map__25197__$1;
var content_area_el = cljs.core.get.call(null,map__25197__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25199){
var map__25202 = p__25199;
var map__25202__$1 = ((((!((map__25202 == null)))?((((map__25202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25202):map__25202);
var content_area_el = cljs.core.get.call(null,map__25202__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_25245){
var state_val_25246 = (state_25245[(1)]);
if((state_val_25246 === (1))){
var inst_25230 = (state_25245[(7)]);
var inst_25230__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25231 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25232 = ["10px","10px","100%","68px","1.0"];
var inst_25233 = cljs.core.PersistentHashMap.fromArrays(inst_25231,inst_25232);
var inst_25234 = cljs.core.merge.call(null,inst_25233,style);
var inst_25235 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25230__$1,inst_25234);
var inst_25236 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25230__$1,msg);
var inst_25237 = cljs.core.async.timeout.call(null,(300));
var state_25245__$1 = (function (){var statearr_25247 = state_25245;
(statearr_25247[(8)] = inst_25235);

(statearr_25247[(9)] = inst_25236);

(statearr_25247[(7)] = inst_25230__$1);

return statearr_25247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25245__$1,(2),inst_25237);
} else {
if((state_val_25246 === (2))){
var inst_25230 = (state_25245[(7)]);
var inst_25239 = (state_25245[(2)]);
var inst_25240 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25241 = ["auto"];
var inst_25242 = cljs.core.PersistentHashMap.fromArrays(inst_25240,inst_25241);
var inst_25243 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25230,inst_25242);
var state_25245__$1 = (function (){var statearr_25248 = state_25245;
(statearr_25248[(10)] = inst_25239);

return statearr_25248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25245__$1,inst_25243);
} else {
return null;
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____0 = (function (){
var statearr_25252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25252[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__);

(statearr_25252[(1)] = (1));

return statearr_25252;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____1 = (function (state_25245){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25253){if((e25253 instanceof Object)){
var ex__20725__auto__ = e25253;
var statearr_25254_25256 = state_25245;
(statearr_25254_25256[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25257 = state_25245;
state_25245 = G__25257;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__ = function(state_25245){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____1.call(this,state_25245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_25255 = f__20834__auto__.call(null);
(statearr_25255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_25255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25259 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25259,(0),null);
var ln = cljs.core.nth.call(null,vec__25259,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25262 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25262,(0),null);
var file_line = cljs.core.nth.call(null,vec__25262,(1),null);
var file_column = cljs.core.nth.call(null,vec__25262,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25262,file_name,file_line,file_column){
return (function (p1__25260_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25260_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25262,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16832__auto__ = file_line;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var and__16820__auto__ = cause;
if(cljs.core.truth_(and__16820__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16820__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25265 = figwheel.client.heads_up.ensure_container.call(null);
var map__25265__$1 = ((((!((map__25265 == null)))?((((map__25265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265):map__25265);
var content_area_el = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_25313){
var state_val_25314 = (state_25313[(1)]);
if((state_val_25314 === (1))){
var inst_25296 = (state_25313[(7)]);
var inst_25296__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25297 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25298 = ["0.0"];
var inst_25299 = cljs.core.PersistentHashMap.fromArrays(inst_25297,inst_25298);
var inst_25300 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25296__$1,inst_25299);
var inst_25301 = cljs.core.async.timeout.call(null,(300));
var state_25313__$1 = (function (){var statearr_25315 = state_25313;
(statearr_25315[(7)] = inst_25296__$1);

(statearr_25315[(8)] = inst_25300);

return statearr_25315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25313__$1,(2),inst_25301);
} else {
if((state_val_25314 === (2))){
var inst_25296 = (state_25313[(7)]);
var inst_25303 = (state_25313[(2)]);
var inst_25304 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25305 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25306 = cljs.core.PersistentHashMap.fromArrays(inst_25304,inst_25305);
var inst_25307 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25296,inst_25306);
var inst_25308 = cljs.core.async.timeout.call(null,(200));
var state_25313__$1 = (function (){var statearr_25316 = state_25313;
(statearr_25316[(9)] = inst_25307);

(statearr_25316[(10)] = inst_25303);

return statearr_25316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25313__$1,(3),inst_25308);
} else {
if((state_val_25314 === (3))){
var inst_25296 = (state_25313[(7)]);
var inst_25310 = (state_25313[(2)]);
var inst_25311 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25296,"");
var state_25313__$1 = (function (){var statearr_25317 = state_25313;
(statearr_25317[(11)] = inst_25310);

return statearr_25317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25313__$1,inst_25311);
} else {
return null;
}
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20722__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20722__auto____0 = (function (){
var statearr_25321 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25321[(0)] = figwheel$client$heads_up$clear_$_state_machine__20722__auto__);

(statearr_25321[(1)] = (1));

return statearr_25321;
});
var figwheel$client$heads_up$clear_$_state_machine__20722__auto____1 = (function (state_25313){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25322){if((e25322 instanceof Object)){
var ex__20725__auto__ = e25322;
var statearr_25323_25325 = state_25313;
(statearr_25323_25325[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25326 = state_25313;
state_25313 = G__25326;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20722__auto__ = function(state_25313){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20722__auto____1.call(this,state_25313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20722__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20722__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_25324 = f__20834__auto__.call(null);
(statearr_25324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_25324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_25358){
var state_val_25359 = (state_25358[(1)]);
if((state_val_25359 === (1))){
var inst_25348 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25358__$1,(2),inst_25348);
} else {
if((state_val_25359 === (2))){
var inst_25350 = (state_25358[(2)]);
var inst_25351 = cljs.core.async.timeout.call(null,(400));
var state_25358__$1 = (function (){var statearr_25360 = state_25358;
(statearr_25360[(7)] = inst_25350);

return statearr_25360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25358__$1,(3),inst_25351);
} else {
if((state_val_25359 === (3))){
var inst_25353 = (state_25358[(2)]);
var inst_25354 = figwheel.client.heads_up.clear.call(null);
var state_25358__$1 = (function (){var statearr_25361 = state_25358;
(statearr_25361[(8)] = inst_25353);

return statearr_25361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25358__$1,(4),inst_25354);
} else {
if((state_val_25359 === (4))){
var inst_25356 = (state_25358[(2)]);
var state_25358__$1 = state_25358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25358__$1,inst_25356);
} else {
return null;
}
}
}
}
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____0 = (function (){
var statearr_25365 = [null,null,null,null,null,null,null,null,null];
(statearr_25365[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__);

(statearr_25365[(1)] = (1));

return statearr_25365;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____1 = (function (state_25358){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_25358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e25366){if((e25366 instanceof Object)){
var ex__20725__auto__ = e25366;
var statearr_25367_25369 = state_25358;
(statearr_25367_25369[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25370 = state_25358;
state_25358 = G__25370;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__ = function(state_25358){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____1.call(this,state_25358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_25368 = f__20834__auto__.call(null);
(statearr_25368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_25368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map