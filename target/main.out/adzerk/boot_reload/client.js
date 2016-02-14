// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.connection');
goog.require('adzerk.boot_reload.reload');
goog.require('adzerk.boot_reload.display');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
if(typeof adzerk.boot_reload.client.handle !== 'undefined'){
} else {
adzerk.boot_reload.client.handle = (function (){var method_table__5901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5905__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"adzerk.boot-reload.client","handle"),((function (method_table__5901__auto__,prefer_table__5902__auto__,method_cache__5903__auto__,cached_hierarchy__5904__auto__,hierarchy__5905__auto__){
return (function (msg,opts){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__5901__auto__,prefer_table__5902__auto__,method_cache__5903__auto__,cached_hierarchy__5904__auto__,hierarchy__5905__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5905__auto__,method_table__5901__auto__,prefer_table__5902__auto__,method_cache__5903__auto__,cached_hierarchy__5904__auto__));
})();
}
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"reload","reload",863702807),(function (p__7162,opts){
var map__7163 = p__7162;
var map__7163__$1 = ((((!((map__7163 == null)))?((((map__7163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7163):map__7163);
var files = cljs.core.get.call(null,map__7163__$1,new cljs.core.Keyword(null,"files","files",-472457450));
return adzerk.boot_reload.reload.reload.call(null,files,opts);
}));
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"visual","visual",942787224),(function (state,opts){
return adzerk.boot_reload.display.display.call(null,state,opts);
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__6053__auto__ = [];
var len__6046__auto___7169 = arguments.length;
var i__6047__auto___7170 = (0);
while(true){
if((i__6047__auto___7170 < len__6046__auto___7169)){
args__6053__auto__.push((arguments[i__6047__auto___7170]));

var G__7171 = (i__6047__auto___7170 + (1));
i__6047__auto___7170 = G__7171;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__7167){
var vec__7168 = p__7167;
var opts = cljs.core.nth.call(null,vec__7168,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_.call(null))){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__7168,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-protocol","set-protocol",1849530943),new cljs.core.Keyword(null,"protocol","protocol",652470118),window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__7168,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__7168,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
return adzerk.boot_reload.client.handle.call(null,msg,opts);
});})(conn,vec__7168,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__7168,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__7168,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__7168,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__7168,opts))
);

return clojure.browser.net.connect.call(null,conn,url);
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq7165){
var G__7166 = cljs.core.first.call(null,seq7165);
var seq7165__$1 = cljs.core.next.call(null,seq7165);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__7166,seq7165__$1);
});

//# sourceMappingURL=client.js.map