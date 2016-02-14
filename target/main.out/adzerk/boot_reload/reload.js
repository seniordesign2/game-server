// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6890_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6890_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6895 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6896 = null;
var count__6897 = (0);
var i__6898 = (0);
while(true){
if((i__6898 < count__6897)){
var s = cljs.core._nth.call(null,chunk__6896,i__6898);
var temp__4425__auto___6899 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6899)){
var sheet_6900 = temp__4425__auto___6899;
var temp__4425__auto___6901__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6900.href,changed);
if(cljs.core.truth_(temp__4425__auto___6901__$1)){
var href_uri_6902 = temp__4425__auto___6901__$1;
sheet_6900.ownerNode.href = href_uri_6902.makeUnique().toString();
} else {
}
} else {
}

var G__6903 = seq__6895;
var G__6904 = chunk__6896;
var G__6905 = count__6897;
var G__6906 = (i__6898 + (1));
seq__6895 = G__6903;
chunk__6896 = G__6904;
count__6897 = G__6905;
i__6898 = G__6906;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6895);
if(temp__4425__auto__){
var seq__6895__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6895__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6895__$1);
var G__6907 = cljs.core.chunk_rest.call(null,seq__6895__$1);
var G__6908 = c__5791__auto__;
var G__6909 = cljs.core.count.call(null,c__5791__auto__);
var G__6910 = (0);
seq__6895 = G__6907;
chunk__6896 = G__6908;
count__6897 = G__6909;
i__6898 = G__6910;
continue;
} else {
var s = cljs.core.first.call(null,seq__6895__$1);
var temp__4425__auto___6911__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6911__$1)){
var sheet_6912 = temp__4425__auto___6911__$1;
var temp__4425__auto___6913__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6912.href,changed);
if(cljs.core.truth_(temp__4425__auto___6913__$2)){
var href_uri_6914 = temp__4425__auto___6913__$2;
sheet_6912.ownerNode.href = href_uri_6914.makeUnique().toString();
} else {
}
} else {
}

var G__6915 = cljs.core.next.call(null,seq__6895__$1);
var G__6916 = null;
var G__6917 = (0);
var G__6918 = (0);
seq__6895 = G__6915;
chunk__6896 = G__6916;
count__6897 = G__6917;
i__6898 = G__6918;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6923 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6924 = null;
var count__6925 = (0);
var i__6926 = (0);
while(true){
if((i__6926 < count__6925)){
var s = cljs.core._nth.call(null,chunk__6924,i__6926);
var temp__4425__auto___6927 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6927)){
var image_6928 = temp__4425__auto___6927;
var temp__4425__auto___6929__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6928.src,changed);
if(cljs.core.truth_(temp__4425__auto___6929__$1)){
var href_uri_6930 = temp__4425__auto___6929__$1;
image_6928.src = href_uri_6930.makeUnique().toString();
} else {
}
} else {
}

var G__6931 = seq__6923;
var G__6932 = chunk__6924;
var G__6933 = count__6925;
var G__6934 = (i__6926 + (1));
seq__6923 = G__6931;
chunk__6924 = G__6932;
count__6925 = G__6933;
i__6926 = G__6934;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6923);
if(temp__4425__auto__){
var seq__6923__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6923__$1);
var G__6935 = cljs.core.chunk_rest.call(null,seq__6923__$1);
var G__6936 = c__5791__auto__;
var G__6937 = cljs.core.count.call(null,c__5791__auto__);
var G__6938 = (0);
seq__6923 = G__6935;
chunk__6924 = G__6936;
count__6925 = G__6937;
i__6926 = G__6938;
continue;
} else {
var s = cljs.core.first.call(null,seq__6923__$1);
var temp__4425__auto___6939__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6939__$1)){
var image_6940 = temp__4425__auto___6939__$1;
var temp__4425__auto___6941__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6940.src,changed);
if(cljs.core.truth_(temp__4425__auto___6941__$2)){
var href_uri_6942 = temp__4425__auto___6941__$2;
image_6940.src = href_uri_6942.makeUnique().toString();
} else {
}
} else {
}

var G__6943 = cljs.core.next.call(null,seq__6923__$1);
var G__6944 = null;
var G__6945 = (0);
var G__6946 = (0);
seq__6923 = G__6943;
chunk__6924 = G__6944;
count__6925 = G__6945;
i__6926 = G__6946;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6949){
var map__6952 = p__6949;
var map__6952__$1 = ((((!((map__6952 == null)))?((((map__6952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6952):map__6952);
var on_jsload = cljs.core.get.call(null,map__6952__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6952,map__6952__$1,on_jsload){
return (function (p1__6947_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6947_SHARP_,".js");
});})(map__6952,map__6952__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6952,map__6952__$1,on_jsload){
return (function (p1__6948_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6948_SHARP_).makeUnique());
});})(js_files,map__6952,map__6952__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6952,map__6952__$1,on_jsload){
return (function() { 
var G__6954__delegate = function (_){
return on_jsload.call(null);
};
var G__6954 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6955__i = 0, G__6955__a = new Array(arguments.length -  0);
while (G__6955__i < G__6955__a.length) {G__6955__a[G__6955__i] = arguments[G__6955__i + 0]; ++G__6955__i;}
  _ = new cljs.core.IndexedSeq(G__6955__a,0);
} 
return G__6954__delegate.call(this,_);};
G__6954.cljs$lang$maxFixedArity = 0;
G__6954.cljs$lang$applyTo = (function (arglist__6956){
var _ = cljs.core.seq(arglist__6956);
return G__6954__delegate(_);
});
G__6954.cljs$core$IFn$_invoke$arity$variadic = G__6954__delegate;
return G__6954;
})()
;})(js_files,map__6952,map__6952__$1,on_jsload))
,((function (js_files,map__6952,map__6952__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6952,map__6952__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6961_6965 = cljs.core.seq.call(null,things_to_log);
var chunk__6962_6966 = null;
var count__6963_6967 = (0);
var i__6964_6968 = (0);
while(true){
if((i__6964_6968 < count__6963_6967)){
var t_6969 = cljs.core._nth.call(null,chunk__6962_6966,i__6964_6968);
console.log(t_6969);

var G__6970 = seq__6961_6965;
var G__6971 = chunk__6962_6966;
var G__6972 = count__6963_6967;
var G__6973 = (i__6964_6968 + (1));
seq__6961_6965 = G__6970;
chunk__6962_6966 = G__6971;
count__6963_6967 = G__6972;
i__6964_6968 = G__6973;
continue;
} else {
var temp__4425__auto___6974 = cljs.core.seq.call(null,seq__6961_6965);
if(temp__4425__auto___6974){
var seq__6961_6975__$1 = temp__4425__auto___6974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6961_6975__$1)){
var c__5791__auto___6976 = cljs.core.chunk_first.call(null,seq__6961_6975__$1);
var G__6977 = cljs.core.chunk_rest.call(null,seq__6961_6975__$1);
var G__6978 = c__5791__auto___6976;
var G__6979 = cljs.core.count.call(null,c__5791__auto___6976);
var G__6980 = (0);
seq__6961_6965 = G__6977;
chunk__6962_6966 = G__6978;
count__6963_6967 = G__6979;
i__6964_6968 = G__6980;
continue;
} else {
var t_6981 = cljs.core.first.call(null,seq__6961_6975__$1);
console.log(t_6981);

var G__6982 = cljs.core.next.call(null,seq__6961_6975__$1);
var G__6983 = null;
var G__6984 = (0);
var G__6985 = (0);
seq__6961_6965 = G__6982;
chunk__6962_6966 = G__6983;
count__6963_6967 = G__6984;
i__6964_6968 = G__6985;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6987 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6987,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6987);

adzerk.boot_reload.reload.reload_css.call(null,G__6987);

adzerk.boot_reload.reload.reload_img.call(null,G__6987);

return G__6987;
});

//# sourceMappingURL=reload.js.map