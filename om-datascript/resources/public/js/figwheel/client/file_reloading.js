// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16832__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16832__auto__){
return or__16832__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16832__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23776_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23776_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23781 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23782 = null;
var count__23783 = (0);
var i__23784 = (0);
while(true){
if((i__23784 < count__23783)){
var n = cljs.core._nth.call(null,chunk__23782,i__23784);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23785 = seq__23781;
var G__23786 = chunk__23782;
var G__23787 = count__23783;
var G__23788 = (i__23784 + (1));
seq__23781 = G__23785;
chunk__23782 = G__23786;
count__23783 = G__23787;
i__23784 = G__23788;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23781);
if(temp__4425__auto__){
var seq__23781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23781__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__23781__$1);
var G__23789 = cljs.core.chunk_rest.call(null,seq__23781__$1);
var G__23790 = c__17635__auto__;
var G__23791 = cljs.core.count.call(null,c__17635__auto__);
var G__23792 = (0);
seq__23781 = G__23789;
chunk__23782 = G__23790;
count__23783 = G__23791;
i__23784 = G__23792;
continue;
} else {
var n = cljs.core.first.call(null,seq__23781__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23793 = cljs.core.next.call(null,seq__23781__$1);
var G__23794 = null;
var G__23795 = (0);
var G__23796 = (0);
seq__23781 = G__23793;
chunk__23782 = G__23794;
count__23783 = G__23795;
i__23784 = G__23796;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23835_23842 = cljs.core.seq.call(null,deps);
var chunk__23836_23843 = null;
var count__23837_23844 = (0);
var i__23838_23845 = (0);
while(true){
if((i__23838_23845 < count__23837_23844)){
var dep_23846 = cljs.core._nth.call(null,chunk__23836_23843,i__23838_23845);
topo_sort_helper_STAR_.call(null,dep_23846,(depth + (1)),state);

var G__23847 = seq__23835_23842;
var G__23848 = chunk__23836_23843;
var G__23849 = count__23837_23844;
var G__23850 = (i__23838_23845 + (1));
seq__23835_23842 = G__23847;
chunk__23836_23843 = G__23848;
count__23837_23844 = G__23849;
i__23838_23845 = G__23850;
continue;
} else {
var temp__4425__auto___23851 = cljs.core.seq.call(null,seq__23835_23842);
if(temp__4425__auto___23851){
var seq__23835_23852__$1 = temp__4425__auto___23851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23835_23852__$1)){
var c__17635__auto___23853 = cljs.core.chunk_first.call(null,seq__23835_23852__$1);
var G__23854 = cljs.core.chunk_rest.call(null,seq__23835_23852__$1);
var G__23855 = c__17635__auto___23853;
var G__23856 = cljs.core.count.call(null,c__17635__auto___23853);
var G__23857 = (0);
seq__23835_23842 = G__23854;
chunk__23836_23843 = G__23855;
count__23837_23844 = G__23856;
i__23838_23845 = G__23857;
continue;
} else {
var dep_23858 = cljs.core.first.call(null,seq__23835_23852__$1);
topo_sort_helper_STAR_.call(null,dep_23858,(depth + (1)),state);

var G__23859 = cljs.core.next.call(null,seq__23835_23852__$1);
var G__23860 = null;
var G__23861 = (0);
var G__23862 = (0);
seq__23835_23842 = G__23859;
chunk__23836_23843 = G__23860;
count__23837_23844 = G__23861;
i__23838_23845 = G__23862;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23839){
var vec__23841 = p__23839;
var x = cljs.core.nth.call(null,vec__23841,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23841,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23841,x,xs,get_deps__$1){
return (function (p1__23797_SHARP_){
return clojure.set.difference.call(null,p1__23797_SHARP_,x);
});})(vec__23841,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23875 = cljs.core.seq.call(null,provides);
var chunk__23876 = null;
var count__23877 = (0);
var i__23878 = (0);
while(true){
if((i__23878 < count__23877)){
var prov = cljs.core._nth.call(null,chunk__23876,i__23878);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23879_23887 = cljs.core.seq.call(null,requires);
var chunk__23880_23888 = null;
var count__23881_23889 = (0);
var i__23882_23890 = (0);
while(true){
if((i__23882_23890 < count__23881_23889)){
var req_23891 = cljs.core._nth.call(null,chunk__23880_23888,i__23882_23890);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23891,prov);

var G__23892 = seq__23879_23887;
var G__23893 = chunk__23880_23888;
var G__23894 = count__23881_23889;
var G__23895 = (i__23882_23890 + (1));
seq__23879_23887 = G__23892;
chunk__23880_23888 = G__23893;
count__23881_23889 = G__23894;
i__23882_23890 = G__23895;
continue;
} else {
var temp__4425__auto___23896 = cljs.core.seq.call(null,seq__23879_23887);
if(temp__4425__auto___23896){
var seq__23879_23897__$1 = temp__4425__auto___23896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23879_23897__$1)){
var c__17635__auto___23898 = cljs.core.chunk_first.call(null,seq__23879_23897__$1);
var G__23899 = cljs.core.chunk_rest.call(null,seq__23879_23897__$1);
var G__23900 = c__17635__auto___23898;
var G__23901 = cljs.core.count.call(null,c__17635__auto___23898);
var G__23902 = (0);
seq__23879_23887 = G__23899;
chunk__23880_23888 = G__23900;
count__23881_23889 = G__23901;
i__23882_23890 = G__23902;
continue;
} else {
var req_23903 = cljs.core.first.call(null,seq__23879_23897__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23903,prov);

var G__23904 = cljs.core.next.call(null,seq__23879_23897__$1);
var G__23905 = null;
var G__23906 = (0);
var G__23907 = (0);
seq__23879_23887 = G__23904;
chunk__23880_23888 = G__23905;
count__23881_23889 = G__23906;
i__23882_23890 = G__23907;
continue;
}
} else {
}
}
break;
}

var G__23908 = seq__23875;
var G__23909 = chunk__23876;
var G__23910 = count__23877;
var G__23911 = (i__23878 + (1));
seq__23875 = G__23908;
chunk__23876 = G__23909;
count__23877 = G__23910;
i__23878 = G__23911;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23875);
if(temp__4425__auto__){
var seq__23875__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23875__$1)){
var c__17635__auto__ = cljs.core.chunk_first.call(null,seq__23875__$1);
var G__23912 = cljs.core.chunk_rest.call(null,seq__23875__$1);
var G__23913 = c__17635__auto__;
var G__23914 = cljs.core.count.call(null,c__17635__auto__);
var G__23915 = (0);
seq__23875 = G__23912;
chunk__23876 = G__23913;
count__23877 = G__23914;
i__23878 = G__23915;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23875__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23883_23916 = cljs.core.seq.call(null,requires);
var chunk__23884_23917 = null;
var count__23885_23918 = (0);
var i__23886_23919 = (0);
while(true){
if((i__23886_23919 < count__23885_23918)){
var req_23920 = cljs.core._nth.call(null,chunk__23884_23917,i__23886_23919);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23920,prov);

var G__23921 = seq__23883_23916;
var G__23922 = chunk__23884_23917;
var G__23923 = count__23885_23918;
var G__23924 = (i__23886_23919 + (1));
seq__23883_23916 = G__23921;
chunk__23884_23917 = G__23922;
count__23885_23918 = G__23923;
i__23886_23919 = G__23924;
continue;
} else {
var temp__4425__auto___23925__$1 = cljs.core.seq.call(null,seq__23883_23916);
if(temp__4425__auto___23925__$1){
var seq__23883_23926__$1 = temp__4425__auto___23925__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23883_23926__$1)){
var c__17635__auto___23927 = cljs.core.chunk_first.call(null,seq__23883_23926__$1);
var G__23928 = cljs.core.chunk_rest.call(null,seq__23883_23926__$1);
var G__23929 = c__17635__auto___23927;
var G__23930 = cljs.core.count.call(null,c__17635__auto___23927);
var G__23931 = (0);
seq__23883_23916 = G__23928;
chunk__23884_23917 = G__23929;
count__23885_23918 = G__23930;
i__23886_23919 = G__23931;
continue;
} else {
var req_23932 = cljs.core.first.call(null,seq__23883_23926__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23932,prov);

var G__23933 = cljs.core.next.call(null,seq__23883_23926__$1);
var G__23934 = null;
var G__23935 = (0);
var G__23936 = (0);
seq__23883_23916 = G__23933;
chunk__23884_23917 = G__23934;
count__23885_23918 = G__23935;
i__23886_23919 = G__23936;
continue;
}
} else {
}
}
break;
}

var G__23937 = cljs.core.next.call(null,seq__23875__$1);
var G__23938 = null;
var G__23939 = (0);
var G__23940 = (0);
seq__23875 = G__23937;
chunk__23876 = G__23938;
count__23877 = G__23939;
i__23878 = G__23940;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23945_23949 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23946_23950 = null;
var count__23947_23951 = (0);
var i__23948_23952 = (0);
while(true){
if((i__23948_23952 < count__23947_23951)){
var ns_23953 = cljs.core._nth.call(null,chunk__23946_23950,i__23948_23952);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23953);

var G__23954 = seq__23945_23949;
var G__23955 = chunk__23946_23950;
var G__23956 = count__23947_23951;
var G__23957 = (i__23948_23952 + (1));
seq__23945_23949 = G__23954;
chunk__23946_23950 = G__23955;
count__23947_23951 = G__23956;
i__23948_23952 = G__23957;
continue;
} else {
var temp__4425__auto___23958 = cljs.core.seq.call(null,seq__23945_23949);
if(temp__4425__auto___23958){
var seq__23945_23959__$1 = temp__4425__auto___23958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23945_23959__$1)){
var c__17635__auto___23960 = cljs.core.chunk_first.call(null,seq__23945_23959__$1);
var G__23961 = cljs.core.chunk_rest.call(null,seq__23945_23959__$1);
var G__23962 = c__17635__auto___23960;
var G__23963 = cljs.core.count.call(null,c__17635__auto___23960);
var G__23964 = (0);
seq__23945_23949 = G__23961;
chunk__23946_23950 = G__23962;
count__23947_23951 = G__23963;
i__23948_23952 = G__23964;
continue;
} else {
var ns_23965 = cljs.core.first.call(null,seq__23945_23959__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23965);

var G__23966 = cljs.core.next.call(null,seq__23945_23959__$1);
var G__23967 = null;
var G__23968 = (0);
var G__23969 = (0);
seq__23945_23949 = G__23966;
chunk__23946_23950 = G__23967;
count__23947_23951 = G__23968;
i__23948_23952 = G__23969;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16832__auto__ = goog.require__;
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23970__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23970 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23971__i = 0, G__23971__a = new Array(arguments.length -  0);
while (G__23971__i < G__23971__a.length) {G__23971__a[G__23971__i] = arguments[G__23971__i + 0]; ++G__23971__i;}
  args = new cljs.core.IndexedSeq(G__23971__a,0);
} 
return G__23970__delegate.call(this,args);};
G__23970.cljs$lang$maxFixedArity = 0;
G__23970.cljs$lang$applyTo = (function (arglist__23972){
var args = cljs.core.seq(arglist__23972);
return G__23970__delegate(args);
});
G__23970.cljs$core$IFn$_invoke$arity$variadic = G__23970__delegate;
return G__23970;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23974 = cljs.core._EQ_;
var expr__23975 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23974.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23975))){
var path_parts = ((function (pred__23974,expr__23975){
return (function (p1__23973_SHARP_){
return clojure.string.split.call(null,p1__23973_SHARP_,/[\/\\]/);
});})(pred__23974,expr__23975))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23974,expr__23975){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23977){if((e23977 instanceof Error)){
var e = e23977;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23977;

}
}})());
});
;})(path_parts,sep,root,pred__23974,expr__23975))
} else {
if(cljs.core.truth_(pred__23974.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23975))){
return ((function (pred__23974,expr__23975){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23974,expr__23975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23974,expr__23975))
);

return deferred.addErrback(((function (deferred,pred__23974,expr__23975){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23974,expr__23975))
);
});
;})(pred__23974,expr__23975))
} else {
return ((function (pred__23974,expr__23975){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23974,expr__23975))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23978,callback){
var map__23981 = p__23978;
var map__23981__$1 = ((((!((map__23981 == null)))?((((map__23981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23981):map__23981);
var file_msg = map__23981__$1;
var request_url = cljs.core.get.call(null,map__23981__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23981,map__23981__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23981,map__23981__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__){
return (function (state_24005){
var state_val_24006 = (state_24005[(1)]);
if((state_val_24006 === (7))){
var inst_24001 = (state_24005[(2)]);
var state_24005__$1 = state_24005;
var statearr_24007_24027 = state_24005__$1;
(statearr_24007_24027[(2)] = inst_24001);

(statearr_24007_24027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (1))){
var state_24005__$1 = state_24005;
var statearr_24008_24028 = state_24005__$1;
(statearr_24008_24028[(2)] = null);

(statearr_24008_24028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (4))){
var inst_23985 = (state_24005[(7)]);
var inst_23985__$1 = (state_24005[(2)]);
var state_24005__$1 = (function (){var statearr_24009 = state_24005;
(statearr_24009[(7)] = inst_23985__$1);

return statearr_24009;
})();
if(cljs.core.truth_(inst_23985__$1)){
var statearr_24010_24029 = state_24005__$1;
(statearr_24010_24029[(1)] = (5));

} else {
var statearr_24011_24030 = state_24005__$1;
(statearr_24011_24030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (6))){
var state_24005__$1 = state_24005;
var statearr_24012_24031 = state_24005__$1;
(statearr_24012_24031[(2)] = null);

(statearr_24012_24031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (3))){
var inst_24003 = (state_24005[(2)]);
var state_24005__$1 = state_24005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24005__$1,inst_24003);
} else {
if((state_val_24006 === (2))){
var state_24005__$1 = state_24005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24005__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24006 === (11))){
var inst_23997 = (state_24005[(2)]);
var state_24005__$1 = (function (){var statearr_24013 = state_24005;
(statearr_24013[(8)] = inst_23997);

return statearr_24013;
})();
var statearr_24014_24032 = state_24005__$1;
(statearr_24014_24032[(2)] = null);

(statearr_24014_24032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (9))){
var inst_23991 = (state_24005[(9)]);
var inst_23989 = (state_24005[(10)]);
var inst_23993 = inst_23991.call(null,inst_23989);
var state_24005__$1 = state_24005;
var statearr_24015_24033 = state_24005__$1;
(statearr_24015_24033[(2)] = inst_23993);

(statearr_24015_24033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (5))){
var inst_23985 = (state_24005[(7)]);
var inst_23987 = figwheel.client.file_reloading.blocking_load.call(null,inst_23985);
var state_24005__$1 = state_24005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24005__$1,(8),inst_23987);
} else {
if((state_val_24006 === (10))){
var inst_23989 = (state_24005[(10)]);
var inst_23995 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23989);
var state_24005__$1 = state_24005;
var statearr_24016_24034 = state_24005__$1;
(statearr_24016_24034[(2)] = inst_23995);

(statearr_24016_24034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (8))){
var inst_23985 = (state_24005[(7)]);
var inst_23991 = (state_24005[(9)]);
var inst_23989 = (state_24005[(2)]);
var inst_23990 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23991__$1 = cljs.core.get.call(null,inst_23990,inst_23985);
var state_24005__$1 = (function (){var statearr_24017 = state_24005;
(statearr_24017[(9)] = inst_23991__$1);

(statearr_24017[(10)] = inst_23989);

return statearr_24017;
})();
if(cljs.core.truth_(inst_23991__$1)){
var statearr_24018_24035 = state_24005__$1;
(statearr_24018_24035[(1)] = (9));

} else {
var statearr_24019_24036 = state_24005__$1;
(statearr_24019_24036[(1)] = (10));

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
});})(c__20833__auto__))
;
return ((function (switch__20721__auto__,c__20833__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20722__auto__ = null;
var figwheel$client$file_reloading$state_machine__20722__auto____0 = (function (){
var statearr_24023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24023[(0)] = figwheel$client$file_reloading$state_machine__20722__auto__);

(statearr_24023[(1)] = (1));

return statearr_24023;
});
var figwheel$client$file_reloading$state_machine__20722__auto____1 = (function (state_24005){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_24005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object)){
var ex__20725__auto__ = e24024;
var statearr_24025_24037 = state_24005;
(statearr_24025_24037[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24038 = state_24005;
state_24005 = G__24038;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20722__auto__ = function(state_24005){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20722__auto____1.call(this,state_24005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20722__auto____0;
figwheel$client$file_reloading$state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20722__auto____1;
return figwheel$client$file_reloading$state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__))
})();
var state__20835__auto__ = (function (){var statearr_24026 = f__20834__auto__.call(null);
(statearr_24026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_24026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__))
);

return c__20833__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24039,callback){
var map__24042 = p__24039;
var map__24042__$1 = ((((!((map__24042 == null)))?((((map__24042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24042):map__24042);
var file_msg = map__24042__$1;
var namespace = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24042,map__24042__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24042,map__24042__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24044){
var map__24047 = p__24044;
var map__24047__$1 = ((((!((map__24047 == null)))?((((map__24047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var file_msg = map__24047__$1;
var namespace = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16820__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16820__auto__){
var or__16832__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16832__auto__)){
return or__16832__auto__;
} else {
var or__16832__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16832__auto____$1)){
return or__16832__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16820__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24049,callback){
var map__24052 = p__24049;
var map__24052__$1 = ((((!((map__24052 == null)))?((((map__24052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24052):map__24052);
var file_msg = map__24052__$1;
var request_url = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20833__auto___24140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto___24140,out){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto___24140,out){
return (function (state_24122){
var state_val_24123 = (state_24122[(1)]);
if((state_val_24123 === (1))){
var inst_24100 = cljs.core.nth.call(null,files,(0),null);
var inst_24101 = cljs.core.nthnext.call(null,files,(1));
var inst_24102 = files;
var state_24122__$1 = (function (){var statearr_24124 = state_24122;
(statearr_24124[(7)] = inst_24101);

(statearr_24124[(8)] = inst_24102);

(statearr_24124[(9)] = inst_24100);

return statearr_24124;
})();
var statearr_24125_24141 = state_24122__$1;
(statearr_24125_24141[(2)] = null);

(statearr_24125_24141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (2))){
var inst_24105 = (state_24122[(10)]);
var inst_24102 = (state_24122[(8)]);
var inst_24105__$1 = cljs.core.nth.call(null,inst_24102,(0),null);
var inst_24106 = cljs.core.nthnext.call(null,inst_24102,(1));
var inst_24107 = (inst_24105__$1 == null);
var inst_24108 = cljs.core.not.call(null,inst_24107);
var state_24122__$1 = (function (){var statearr_24126 = state_24122;
(statearr_24126[(10)] = inst_24105__$1);

(statearr_24126[(11)] = inst_24106);

return statearr_24126;
})();
if(inst_24108){
var statearr_24127_24142 = state_24122__$1;
(statearr_24127_24142[(1)] = (4));

} else {
var statearr_24128_24143 = state_24122__$1;
(statearr_24128_24143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (3))){
var inst_24120 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24122__$1,inst_24120);
} else {
if((state_val_24123 === (4))){
var inst_24105 = (state_24122[(10)]);
var inst_24110 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24105);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24122__$1,(7),inst_24110);
} else {
if((state_val_24123 === (5))){
var inst_24116 = cljs.core.async.close_BANG_.call(null,out);
var state_24122__$1 = state_24122;
var statearr_24129_24144 = state_24122__$1;
(statearr_24129_24144[(2)] = inst_24116);

(statearr_24129_24144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (6))){
var inst_24118 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24130_24145 = state_24122__$1;
(statearr_24130_24145[(2)] = inst_24118);

(statearr_24130_24145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (7))){
var inst_24106 = (state_24122[(11)]);
var inst_24112 = (state_24122[(2)]);
var inst_24113 = cljs.core.async.put_BANG_.call(null,out,inst_24112);
var inst_24102 = inst_24106;
var state_24122__$1 = (function (){var statearr_24131 = state_24122;
(statearr_24131[(8)] = inst_24102);

(statearr_24131[(12)] = inst_24113);

return statearr_24131;
})();
var statearr_24132_24146 = state_24122__$1;
(statearr_24132_24146[(2)] = null);

(statearr_24132_24146[(1)] = (2));


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
});})(c__20833__auto___24140,out))
;
return ((function (switch__20721__auto__,c__20833__auto___24140,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____0 = (function (){
var statearr_24136 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24136[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__);

(statearr_24136[(1)] = (1));

return statearr_24136;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____1 = (function (state_24122){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_24122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e24137){if((e24137 instanceof Object)){
var ex__20725__auto__ = e24137;
var statearr_24138_24147 = state_24122;
(statearr_24138_24147[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24148 = state_24122;
state_24122 = G__24148;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto___24140,out))
})();
var state__20835__auto__ = (function (){var statearr_24139 = f__20834__auto__.call(null);
(statearr_24139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto___24140);

return statearr_24139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto___24140,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24149,opts){
var map__24153 = p__24149;
var map__24153__$1 = ((((!((map__24153 == null)))?((((map__24153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24153):map__24153);
var eval_body__$1 = cljs.core.get.call(null,map__24153__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24153__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16820__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16820__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16820__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24155){var e = e24155;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24156_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24156_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24161){
var vec__24162 = p__24161;
var k = cljs.core.nth.call(null,vec__24162,(0),null);
var v = cljs.core.nth.call(null,vec__24162,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24163){
var vec__24164 = p__24163;
var k = cljs.core.nth.call(null,vec__24164,(0),null);
var v = cljs.core.nth.call(null,vec__24164,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24168,p__24169){
var map__24416 = p__24168;
var map__24416__$1 = ((((!((map__24416 == null)))?((((map__24416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24416):map__24416);
var opts = map__24416__$1;
var before_jsload = cljs.core.get.call(null,map__24416__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24416__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24416__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24417 = p__24169;
var map__24417__$1 = ((((!((map__24417 == null)))?((((map__24417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24417):map__24417);
var msg = map__24417__$1;
var files = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24417__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20834__auto__ = (function (){var switch__20721__auto__ = ((function (c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24570){
var state_val_24571 = (state_24570[(1)]);
if((state_val_24571 === (7))){
var inst_24432 = (state_24570[(7)]);
var inst_24431 = (state_24570[(8)]);
var inst_24433 = (state_24570[(9)]);
var inst_24434 = (state_24570[(10)]);
var inst_24439 = cljs.core._nth.call(null,inst_24432,inst_24434);
var inst_24440 = figwheel.client.file_reloading.eval_body.call(null,inst_24439,opts);
var inst_24441 = (inst_24434 + (1));
var tmp24572 = inst_24432;
var tmp24573 = inst_24431;
var tmp24574 = inst_24433;
var inst_24431__$1 = tmp24573;
var inst_24432__$1 = tmp24572;
var inst_24433__$1 = tmp24574;
var inst_24434__$1 = inst_24441;
var state_24570__$1 = (function (){var statearr_24575 = state_24570;
(statearr_24575[(7)] = inst_24432__$1);

(statearr_24575[(8)] = inst_24431__$1);

(statearr_24575[(11)] = inst_24440);

(statearr_24575[(9)] = inst_24433__$1);

(statearr_24575[(10)] = inst_24434__$1);

return statearr_24575;
})();
var statearr_24576_24662 = state_24570__$1;
(statearr_24576_24662[(2)] = null);

(statearr_24576_24662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (20))){
var inst_24474 = (state_24570[(12)]);
var inst_24482 = figwheel.client.file_reloading.sort_files.call(null,inst_24474);
var state_24570__$1 = state_24570;
var statearr_24577_24663 = state_24570__$1;
(statearr_24577_24663[(2)] = inst_24482);

(statearr_24577_24663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (27))){
var state_24570__$1 = state_24570;
var statearr_24578_24664 = state_24570__$1;
(statearr_24578_24664[(2)] = null);

(statearr_24578_24664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (1))){
var inst_24423 = (state_24570[(13)]);
var inst_24420 = before_jsload.call(null,files);
var inst_24421 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24422 = (function (){return ((function (inst_24423,inst_24420,inst_24421,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24165_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24165_SHARP_);
});
;})(inst_24423,inst_24420,inst_24421,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24423__$1 = cljs.core.filter.call(null,inst_24422,files);
var inst_24424 = cljs.core.not_empty.call(null,inst_24423__$1);
var state_24570__$1 = (function (){var statearr_24579 = state_24570;
(statearr_24579[(14)] = inst_24420);

(statearr_24579[(13)] = inst_24423__$1);

(statearr_24579[(15)] = inst_24421);

return statearr_24579;
})();
if(cljs.core.truth_(inst_24424)){
var statearr_24580_24665 = state_24570__$1;
(statearr_24580_24665[(1)] = (2));

} else {
var statearr_24581_24666 = state_24570__$1;
(statearr_24581_24666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (24))){
var state_24570__$1 = state_24570;
var statearr_24582_24667 = state_24570__$1;
(statearr_24582_24667[(2)] = null);

(statearr_24582_24667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (39))){
var inst_24524 = (state_24570[(16)]);
var state_24570__$1 = state_24570;
var statearr_24583_24668 = state_24570__$1;
(statearr_24583_24668[(2)] = inst_24524);

(statearr_24583_24668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (46))){
var inst_24565 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24584_24669 = state_24570__$1;
(statearr_24584_24669[(2)] = inst_24565);

(statearr_24584_24669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (4))){
var inst_24468 = (state_24570[(2)]);
var inst_24469 = cljs.core.List.EMPTY;
var inst_24470 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24469);
var inst_24471 = (function (){return ((function (inst_24468,inst_24469,inst_24470,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24166_SHARP_){
var and__16820__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24166_SHARP_);
if(cljs.core.truth_(and__16820__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24166_SHARP_));
} else {
return and__16820__auto__;
}
});
;})(inst_24468,inst_24469,inst_24470,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24472 = cljs.core.filter.call(null,inst_24471,files);
var inst_24473 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24474 = cljs.core.concat.call(null,inst_24472,inst_24473);
var state_24570__$1 = (function (){var statearr_24585 = state_24570;
(statearr_24585[(17)] = inst_24470);

(statearr_24585[(12)] = inst_24474);

(statearr_24585[(18)] = inst_24468);

return statearr_24585;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24586_24670 = state_24570__$1;
(statearr_24586_24670[(1)] = (16));

} else {
var statearr_24587_24671 = state_24570__$1;
(statearr_24587_24671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (15))){
var inst_24458 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24588_24672 = state_24570__$1;
(statearr_24588_24672[(2)] = inst_24458);

(statearr_24588_24672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (21))){
var inst_24484 = (state_24570[(19)]);
var inst_24484__$1 = (state_24570[(2)]);
var inst_24485 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24484__$1);
var state_24570__$1 = (function (){var statearr_24589 = state_24570;
(statearr_24589[(19)] = inst_24484__$1);

return statearr_24589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24570__$1,(22),inst_24485);
} else {
if((state_val_24571 === (31))){
var inst_24568 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24570__$1,inst_24568);
} else {
if((state_val_24571 === (32))){
var inst_24524 = (state_24570[(16)]);
var inst_24529 = inst_24524.cljs$lang$protocol_mask$partition0$;
var inst_24530 = (inst_24529 & (64));
var inst_24531 = inst_24524.cljs$core$ISeq$;
var inst_24532 = (inst_24530) || (inst_24531);
var state_24570__$1 = state_24570;
if(cljs.core.truth_(inst_24532)){
var statearr_24590_24673 = state_24570__$1;
(statearr_24590_24673[(1)] = (35));

} else {
var statearr_24591_24674 = state_24570__$1;
(statearr_24591_24674[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (40))){
var inst_24545 = (state_24570[(20)]);
var inst_24544 = (state_24570[(2)]);
var inst_24545__$1 = cljs.core.get.call(null,inst_24544,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24546 = cljs.core.get.call(null,inst_24544,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24547 = cljs.core.not_empty.call(null,inst_24545__$1);
var state_24570__$1 = (function (){var statearr_24592 = state_24570;
(statearr_24592[(21)] = inst_24546);

(statearr_24592[(20)] = inst_24545__$1);

return statearr_24592;
})();
if(cljs.core.truth_(inst_24547)){
var statearr_24593_24675 = state_24570__$1;
(statearr_24593_24675[(1)] = (41));

} else {
var statearr_24594_24676 = state_24570__$1;
(statearr_24594_24676[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (33))){
var state_24570__$1 = state_24570;
var statearr_24595_24677 = state_24570__$1;
(statearr_24595_24677[(2)] = false);

(statearr_24595_24677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (13))){
var inst_24444 = (state_24570[(22)]);
var inst_24448 = cljs.core.chunk_first.call(null,inst_24444);
var inst_24449 = cljs.core.chunk_rest.call(null,inst_24444);
var inst_24450 = cljs.core.count.call(null,inst_24448);
var inst_24431 = inst_24449;
var inst_24432 = inst_24448;
var inst_24433 = inst_24450;
var inst_24434 = (0);
var state_24570__$1 = (function (){var statearr_24596 = state_24570;
(statearr_24596[(7)] = inst_24432);

(statearr_24596[(8)] = inst_24431);

(statearr_24596[(9)] = inst_24433);

(statearr_24596[(10)] = inst_24434);

return statearr_24596;
})();
var statearr_24597_24678 = state_24570__$1;
(statearr_24597_24678[(2)] = null);

(statearr_24597_24678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (22))){
var inst_24484 = (state_24570[(19)]);
var inst_24492 = (state_24570[(23)]);
var inst_24487 = (state_24570[(24)]);
var inst_24488 = (state_24570[(25)]);
var inst_24487__$1 = (state_24570[(2)]);
var inst_24488__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24487__$1);
var inst_24489 = (function (){var all_files = inst_24484;
var res_SINGLEQUOTE_ = inst_24487__$1;
var res = inst_24488__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24484,inst_24492,inst_24487,inst_24488,inst_24487__$1,inst_24488__$1,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24167_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24167_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24484,inst_24492,inst_24487,inst_24488,inst_24487__$1,inst_24488__$1,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24490 = cljs.core.filter.call(null,inst_24489,inst_24487__$1);
var inst_24491 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24492__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24491);
var inst_24493 = cljs.core.not_empty.call(null,inst_24492__$1);
var state_24570__$1 = (function (){var statearr_24598 = state_24570;
(statearr_24598[(23)] = inst_24492__$1);

(statearr_24598[(26)] = inst_24490);

(statearr_24598[(24)] = inst_24487__$1);

(statearr_24598[(25)] = inst_24488__$1);

return statearr_24598;
})();
if(cljs.core.truth_(inst_24493)){
var statearr_24599_24679 = state_24570__$1;
(statearr_24599_24679[(1)] = (23));

} else {
var statearr_24600_24680 = state_24570__$1;
(statearr_24600_24680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (36))){
var state_24570__$1 = state_24570;
var statearr_24601_24681 = state_24570__$1;
(statearr_24601_24681[(2)] = false);

(statearr_24601_24681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (41))){
var inst_24545 = (state_24570[(20)]);
var inst_24549 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24550 = cljs.core.map.call(null,inst_24549,inst_24545);
var inst_24551 = cljs.core.pr_str.call(null,inst_24550);
var inst_24552 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24551)].join('');
var inst_24553 = figwheel.client.utils.log.call(null,inst_24552);
var state_24570__$1 = state_24570;
var statearr_24602_24682 = state_24570__$1;
(statearr_24602_24682[(2)] = inst_24553);

(statearr_24602_24682[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (43))){
var inst_24546 = (state_24570[(21)]);
var inst_24556 = (state_24570[(2)]);
var inst_24557 = cljs.core.not_empty.call(null,inst_24546);
var state_24570__$1 = (function (){var statearr_24603 = state_24570;
(statearr_24603[(27)] = inst_24556);

return statearr_24603;
})();
if(cljs.core.truth_(inst_24557)){
var statearr_24604_24683 = state_24570__$1;
(statearr_24604_24683[(1)] = (44));

} else {
var statearr_24605_24684 = state_24570__$1;
(statearr_24605_24684[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (29))){
var inst_24484 = (state_24570[(19)]);
var inst_24492 = (state_24570[(23)]);
var inst_24524 = (state_24570[(16)]);
var inst_24490 = (state_24570[(26)]);
var inst_24487 = (state_24570[(24)]);
var inst_24488 = (state_24570[(25)]);
var inst_24520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24523 = (function (){var all_files = inst_24484;
var res_SINGLEQUOTE_ = inst_24487;
var res = inst_24488;
var files_not_loaded = inst_24490;
var dependencies_that_loaded = inst_24492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24524,inst_24490,inst_24487,inst_24488,inst_24520,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24522){
var map__24606 = p__24522;
var map__24606__$1 = ((((!((map__24606 == null)))?((((map__24606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24606):map__24606);
var namespace = cljs.core.get.call(null,map__24606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24524,inst_24490,inst_24487,inst_24488,inst_24520,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24524__$1 = cljs.core.group_by.call(null,inst_24523,inst_24490);
var inst_24526 = (inst_24524__$1 == null);
var inst_24527 = cljs.core.not.call(null,inst_24526);
var state_24570__$1 = (function (){var statearr_24608 = state_24570;
(statearr_24608[(28)] = inst_24520);

(statearr_24608[(16)] = inst_24524__$1);

return statearr_24608;
})();
if(inst_24527){
var statearr_24609_24685 = state_24570__$1;
(statearr_24609_24685[(1)] = (32));

} else {
var statearr_24610_24686 = state_24570__$1;
(statearr_24610_24686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (44))){
var inst_24546 = (state_24570[(21)]);
var inst_24559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24546);
var inst_24560 = cljs.core.pr_str.call(null,inst_24559);
var inst_24561 = [cljs.core.str("not required: "),cljs.core.str(inst_24560)].join('');
var inst_24562 = figwheel.client.utils.log.call(null,inst_24561);
var state_24570__$1 = state_24570;
var statearr_24611_24687 = state_24570__$1;
(statearr_24611_24687[(2)] = inst_24562);

(statearr_24611_24687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (6))){
var inst_24465 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24612_24688 = state_24570__$1;
(statearr_24612_24688[(2)] = inst_24465);

(statearr_24612_24688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (28))){
var inst_24490 = (state_24570[(26)]);
var inst_24517 = (state_24570[(2)]);
var inst_24518 = cljs.core.not_empty.call(null,inst_24490);
var state_24570__$1 = (function (){var statearr_24613 = state_24570;
(statearr_24613[(29)] = inst_24517);

return statearr_24613;
})();
if(cljs.core.truth_(inst_24518)){
var statearr_24614_24689 = state_24570__$1;
(statearr_24614_24689[(1)] = (29));

} else {
var statearr_24615_24690 = state_24570__$1;
(statearr_24615_24690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (25))){
var inst_24488 = (state_24570[(25)]);
var inst_24504 = (state_24570[(2)]);
var inst_24505 = cljs.core.not_empty.call(null,inst_24488);
var state_24570__$1 = (function (){var statearr_24616 = state_24570;
(statearr_24616[(30)] = inst_24504);

return statearr_24616;
})();
if(cljs.core.truth_(inst_24505)){
var statearr_24617_24691 = state_24570__$1;
(statearr_24617_24691[(1)] = (26));

} else {
var statearr_24618_24692 = state_24570__$1;
(statearr_24618_24692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (34))){
var inst_24539 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
if(cljs.core.truth_(inst_24539)){
var statearr_24619_24693 = state_24570__$1;
(statearr_24619_24693[(1)] = (38));

} else {
var statearr_24620_24694 = state_24570__$1;
(statearr_24620_24694[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (17))){
var state_24570__$1 = state_24570;
var statearr_24621_24695 = state_24570__$1;
(statearr_24621_24695[(2)] = recompile_dependents);

(statearr_24621_24695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (3))){
var state_24570__$1 = state_24570;
var statearr_24622_24696 = state_24570__$1;
(statearr_24622_24696[(2)] = null);

(statearr_24622_24696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (12))){
var inst_24461 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24623_24697 = state_24570__$1;
(statearr_24623_24697[(2)] = inst_24461);

(statearr_24623_24697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (2))){
var inst_24423 = (state_24570[(13)]);
var inst_24430 = cljs.core.seq.call(null,inst_24423);
var inst_24431 = inst_24430;
var inst_24432 = null;
var inst_24433 = (0);
var inst_24434 = (0);
var state_24570__$1 = (function (){var statearr_24624 = state_24570;
(statearr_24624[(7)] = inst_24432);

(statearr_24624[(8)] = inst_24431);

(statearr_24624[(9)] = inst_24433);

(statearr_24624[(10)] = inst_24434);

return statearr_24624;
})();
var statearr_24625_24698 = state_24570__$1;
(statearr_24625_24698[(2)] = null);

(statearr_24625_24698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (23))){
var inst_24484 = (state_24570[(19)]);
var inst_24492 = (state_24570[(23)]);
var inst_24490 = (state_24570[(26)]);
var inst_24487 = (state_24570[(24)]);
var inst_24488 = (state_24570[(25)]);
var inst_24495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24497 = (function (){var all_files = inst_24484;
var res_SINGLEQUOTE_ = inst_24487;
var res = inst_24488;
var files_not_loaded = inst_24490;
var dependencies_that_loaded = inst_24492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24495,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24496){
var map__24626 = p__24496;
var map__24626__$1 = ((((!((map__24626 == null)))?((((map__24626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24626):map__24626);
var request_url = cljs.core.get.call(null,map__24626__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24495,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24498 = cljs.core.reverse.call(null,inst_24492);
var inst_24499 = cljs.core.map.call(null,inst_24497,inst_24498);
var inst_24500 = cljs.core.pr_str.call(null,inst_24499);
var inst_24501 = figwheel.client.utils.log.call(null,inst_24500);
var state_24570__$1 = (function (){var statearr_24628 = state_24570;
(statearr_24628[(31)] = inst_24495);

return statearr_24628;
})();
var statearr_24629_24699 = state_24570__$1;
(statearr_24629_24699[(2)] = inst_24501);

(statearr_24629_24699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (35))){
var state_24570__$1 = state_24570;
var statearr_24630_24700 = state_24570__$1;
(statearr_24630_24700[(2)] = true);

(statearr_24630_24700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (19))){
var inst_24474 = (state_24570[(12)]);
var inst_24480 = figwheel.client.file_reloading.expand_files.call(null,inst_24474);
var state_24570__$1 = state_24570;
var statearr_24631_24701 = state_24570__$1;
(statearr_24631_24701[(2)] = inst_24480);

(statearr_24631_24701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (11))){
var state_24570__$1 = state_24570;
var statearr_24632_24702 = state_24570__$1;
(statearr_24632_24702[(2)] = null);

(statearr_24632_24702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (9))){
var inst_24463 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24633_24703 = state_24570__$1;
(statearr_24633_24703[(2)] = inst_24463);

(statearr_24633_24703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (5))){
var inst_24433 = (state_24570[(9)]);
var inst_24434 = (state_24570[(10)]);
var inst_24436 = (inst_24434 < inst_24433);
var inst_24437 = inst_24436;
var state_24570__$1 = state_24570;
if(cljs.core.truth_(inst_24437)){
var statearr_24634_24704 = state_24570__$1;
(statearr_24634_24704[(1)] = (7));

} else {
var statearr_24635_24705 = state_24570__$1;
(statearr_24635_24705[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (14))){
var inst_24444 = (state_24570[(22)]);
var inst_24453 = cljs.core.first.call(null,inst_24444);
var inst_24454 = figwheel.client.file_reloading.eval_body.call(null,inst_24453,opts);
var inst_24455 = cljs.core.next.call(null,inst_24444);
var inst_24431 = inst_24455;
var inst_24432 = null;
var inst_24433 = (0);
var inst_24434 = (0);
var state_24570__$1 = (function (){var statearr_24636 = state_24570;
(statearr_24636[(7)] = inst_24432);

(statearr_24636[(32)] = inst_24454);

(statearr_24636[(8)] = inst_24431);

(statearr_24636[(9)] = inst_24433);

(statearr_24636[(10)] = inst_24434);

return statearr_24636;
})();
var statearr_24637_24706 = state_24570__$1;
(statearr_24637_24706[(2)] = null);

(statearr_24637_24706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (45))){
var state_24570__$1 = state_24570;
var statearr_24638_24707 = state_24570__$1;
(statearr_24638_24707[(2)] = null);

(statearr_24638_24707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (26))){
var inst_24484 = (state_24570[(19)]);
var inst_24492 = (state_24570[(23)]);
var inst_24490 = (state_24570[(26)]);
var inst_24487 = (state_24570[(24)]);
var inst_24488 = (state_24570[(25)]);
var inst_24507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24509 = (function (){var all_files = inst_24484;
var res_SINGLEQUOTE_ = inst_24487;
var res = inst_24488;
var files_not_loaded = inst_24490;
var dependencies_that_loaded = inst_24492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24507,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24508){
var map__24639 = p__24508;
var map__24639__$1 = ((((!((map__24639 == null)))?((((map__24639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24639):map__24639);
var namespace = cljs.core.get.call(null,map__24639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24507,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24510 = cljs.core.map.call(null,inst_24509,inst_24488);
var inst_24511 = cljs.core.pr_str.call(null,inst_24510);
var inst_24512 = figwheel.client.utils.log.call(null,inst_24511);
var inst_24513 = (function (){var all_files = inst_24484;
var res_SINGLEQUOTE_ = inst_24487;
var res = inst_24488;
var files_not_loaded = inst_24490;
var dependencies_that_loaded = inst_24492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24507,inst_24509,inst_24510,inst_24511,inst_24512,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24484,inst_24492,inst_24490,inst_24487,inst_24488,inst_24507,inst_24509,inst_24510,inst_24511,inst_24512,state_val_24571,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24514 = setTimeout(inst_24513,(10));
var state_24570__$1 = (function (){var statearr_24641 = state_24570;
(statearr_24641[(33)] = inst_24512);

(statearr_24641[(34)] = inst_24507);

return statearr_24641;
})();
var statearr_24642_24708 = state_24570__$1;
(statearr_24642_24708[(2)] = inst_24514);

(statearr_24642_24708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (16))){
var state_24570__$1 = state_24570;
var statearr_24643_24709 = state_24570__$1;
(statearr_24643_24709[(2)] = reload_dependents);

(statearr_24643_24709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (38))){
var inst_24524 = (state_24570[(16)]);
var inst_24541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24524);
var state_24570__$1 = state_24570;
var statearr_24644_24710 = state_24570__$1;
(statearr_24644_24710[(2)] = inst_24541);

(statearr_24644_24710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (30))){
var state_24570__$1 = state_24570;
var statearr_24645_24711 = state_24570__$1;
(statearr_24645_24711[(2)] = null);

(statearr_24645_24711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (10))){
var inst_24444 = (state_24570[(22)]);
var inst_24446 = cljs.core.chunked_seq_QMARK_.call(null,inst_24444);
var state_24570__$1 = state_24570;
if(inst_24446){
var statearr_24646_24712 = state_24570__$1;
(statearr_24646_24712[(1)] = (13));

} else {
var statearr_24647_24713 = state_24570__$1;
(statearr_24647_24713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (18))){
var inst_24478 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
if(cljs.core.truth_(inst_24478)){
var statearr_24648_24714 = state_24570__$1;
(statearr_24648_24714[(1)] = (19));

} else {
var statearr_24649_24715 = state_24570__$1;
(statearr_24649_24715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (42))){
var state_24570__$1 = state_24570;
var statearr_24650_24716 = state_24570__$1;
(statearr_24650_24716[(2)] = null);

(statearr_24650_24716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (37))){
var inst_24536 = (state_24570[(2)]);
var state_24570__$1 = state_24570;
var statearr_24651_24717 = state_24570__$1;
(statearr_24651_24717[(2)] = inst_24536);

(statearr_24651_24717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24571 === (8))){
var inst_24444 = (state_24570[(22)]);
var inst_24431 = (state_24570[(8)]);
var inst_24444__$1 = cljs.core.seq.call(null,inst_24431);
var state_24570__$1 = (function (){var statearr_24652 = state_24570;
(statearr_24652[(22)] = inst_24444__$1);

return statearr_24652;
})();
if(inst_24444__$1){
var statearr_24653_24718 = state_24570__$1;
(statearr_24653_24718[(1)] = (10));

} else {
var statearr_24654_24719 = state_24570__$1;
(statearr_24654_24719[(1)] = (11));

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
}
});})(c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20721__auto__,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____0 = (function (){
var statearr_24658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__);

(statearr_24658[(1)] = (1));

return statearr_24658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____1 = (function (state_24570){
while(true){
var ret_value__20723__auto__ = (function (){try{while(true){
var result__20724__auto__ = switch__20721__auto__.call(null,state_24570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20724__auto__;
}
break;
}
}catch (e24659){if((e24659 instanceof Object)){
var ex__20725__auto__ = e24659;
var statearr_24660_24720 = state_24570;
(statearr_24660_24720[(5)] = ex__20725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24721 = state_24570;
state_24570 = G__24721;
continue;
} else {
return ret_value__20723__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__ = function(state_24570){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____1.call(this,state_24570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20722__auto__;
})()
;})(switch__20721__auto__,c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20835__auto__ = (function (){var statearr_24661 = f__20834__auto__.call(null);
(statearr_24661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20833__auto__);

return statearr_24661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20835__auto__);
});})(c__20833__auto__,map__24416,map__24416__$1,opts,before_jsload,on_jsload,reload_dependents,map__24417,map__24417__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20833__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24724,link){
var map__24727 = p__24724;
var map__24727__$1 = ((((!((map__24727 == null)))?((((map__24727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24727):map__24727);
var file = cljs.core.get.call(null,map__24727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24727,map__24727__$1,file){
return (function (p1__24722_SHARP_,p2__24723_SHARP_){
if(cljs.core._EQ_.call(null,p1__24722_SHARP_,p2__24723_SHARP_)){
return p1__24722_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24727,map__24727__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24733){
var map__24734 = p__24733;
var map__24734__$1 = ((((!((map__24734 == null)))?((((map__24734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24734):map__24734);
var match_length = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24734__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24729_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24729_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24736 = [];
var len__17890__auto___24739 = arguments.length;
var i__17891__auto___24740 = (0);
while(true){
if((i__17891__auto___24740 < len__17890__auto___24739)){
args24736.push((arguments[i__17891__auto___24740]));

var G__24741 = (i__17891__auto___24740 + (1));
i__17891__auto___24740 = G__24741;
continue;
} else {
}
break;
}

var G__24738 = args24736.length;
switch (G__24738) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24736.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24743_SHARP_,p2__24744_SHARP_){
return cljs.core.assoc.call(null,p1__24743_SHARP_,cljs.core.get.call(null,p2__24744_SHARP_,key),p2__24744_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24745){
var map__24748 = p__24745;
var map__24748__$1 = ((((!((map__24748 == null)))?((((map__24748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24748):map__24748);
var f_data = map__24748__$1;
var file = cljs.core.get.call(null,map__24748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24750,files_msg){
var map__24757 = p__24750;
var map__24757__$1 = ((((!((map__24757 == null)))?((((map__24757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24757):map__24757);
var opts = map__24757__$1;
var on_cssload = cljs.core.get.call(null,map__24757__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24759_24763 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24760_24764 = null;
var count__24761_24765 = (0);
var i__24762_24766 = (0);
while(true){
if((i__24762_24766 < count__24761_24765)){
var f_24767 = cljs.core._nth.call(null,chunk__24760_24764,i__24762_24766);
figwheel.client.file_reloading.reload_css_file.call(null,f_24767);

var G__24768 = seq__24759_24763;
var G__24769 = chunk__24760_24764;
var G__24770 = count__24761_24765;
var G__24771 = (i__24762_24766 + (1));
seq__24759_24763 = G__24768;
chunk__24760_24764 = G__24769;
count__24761_24765 = G__24770;
i__24762_24766 = G__24771;
continue;
} else {
var temp__4425__auto___24772 = cljs.core.seq.call(null,seq__24759_24763);
if(temp__4425__auto___24772){
var seq__24759_24773__$1 = temp__4425__auto___24772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24759_24773__$1)){
var c__17635__auto___24774 = cljs.core.chunk_first.call(null,seq__24759_24773__$1);
var G__24775 = cljs.core.chunk_rest.call(null,seq__24759_24773__$1);
var G__24776 = c__17635__auto___24774;
var G__24777 = cljs.core.count.call(null,c__17635__auto___24774);
var G__24778 = (0);
seq__24759_24763 = G__24775;
chunk__24760_24764 = G__24776;
count__24761_24765 = G__24777;
i__24762_24766 = G__24778;
continue;
} else {
var f_24779 = cljs.core.first.call(null,seq__24759_24773__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24779);

var G__24780 = cljs.core.next.call(null,seq__24759_24773__$1);
var G__24781 = null;
var G__24782 = (0);
var G__24783 = (0);
seq__24759_24763 = G__24780;
chunk__24760_24764 = G__24781;
count__24761_24765 = G__24782;
i__24762_24766 = G__24783;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24757,map__24757__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24757,map__24757__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map