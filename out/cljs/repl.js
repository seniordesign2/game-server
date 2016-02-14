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
var seq__8529_8543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8530_8544 = null;
var count__8531_8545 = (0);
var i__8532_8546 = (0);
while(true){
if((i__8532_8546 < count__8531_8545)){
var f_8547 = cljs.core._nth.call(null,chunk__8530_8544,i__8532_8546);
cljs.core.println.call(null,"  ",f_8547);

var G__8548 = seq__8529_8543;
var G__8549 = chunk__8530_8544;
var G__8550 = count__8531_8545;
var G__8551 = (i__8532_8546 + (1));
seq__8529_8543 = G__8548;
chunk__8530_8544 = G__8549;
count__8531_8545 = G__8550;
i__8532_8546 = G__8551;
continue;
} else {
var temp__4425__auto___8552 = cljs.core.seq.call(null,seq__8529_8543);
if(temp__4425__auto___8552){
var seq__8529_8553__$1 = temp__4425__auto___8552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8529_8553__$1)){
var c__8176__auto___8554 = cljs.core.chunk_first.call(null,seq__8529_8553__$1);
var G__8555 = cljs.core.chunk_rest.call(null,seq__8529_8553__$1);
var G__8556 = c__8176__auto___8554;
var G__8557 = cljs.core.count.call(null,c__8176__auto___8554);
var G__8558 = (0);
seq__8529_8543 = G__8555;
chunk__8530_8544 = G__8556;
count__8531_8545 = G__8557;
i__8532_8546 = G__8558;
continue;
} else {
var f_8559 = cljs.core.first.call(null,seq__8529_8553__$1);
cljs.core.println.call(null,"  ",f_8559);

var G__8560 = cljs.core.next.call(null,seq__8529_8553__$1);
var G__8561 = null;
var G__8562 = (0);
var G__8563 = (0);
seq__8529_8543 = G__8560;
chunk__8530_8544 = G__8561;
count__8531_8545 = G__8562;
i__8532_8546 = G__8563;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8564 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7373__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7373__auto__)){
return or__7373__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8564);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8564)))?cljs.core.second.call(null,arglists_8564):arglists_8564));
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
var seq__8533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8534 = null;
var count__8535 = (0);
var i__8536 = (0);
while(true){
if((i__8536 < count__8535)){
var vec__8537 = cljs.core._nth.call(null,chunk__8534,i__8536);
var name = cljs.core.nth.call(null,vec__8537,(0),null);
var map__8538 = cljs.core.nth.call(null,vec__8537,(1),null);
var map__8538__$1 = ((((!((map__8538 == null)))?((((map__8538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8538):map__8538);
var doc = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8565 = seq__8533;
var G__8566 = chunk__8534;
var G__8567 = count__8535;
var G__8568 = (i__8536 + (1));
seq__8533 = G__8565;
chunk__8534 = G__8566;
count__8535 = G__8567;
i__8536 = G__8568;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8533);
if(temp__4425__auto__){
var seq__8533__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8533__$1)){
var c__8176__auto__ = cljs.core.chunk_first.call(null,seq__8533__$1);
var G__8569 = cljs.core.chunk_rest.call(null,seq__8533__$1);
var G__8570 = c__8176__auto__;
var G__8571 = cljs.core.count.call(null,c__8176__auto__);
var G__8572 = (0);
seq__8533 = G__8569;
chunk__8534 = G__8570;
count__8535 = G__8571;
i__8536 = G__8572;
continue;
} else {
var vec__8540 = cljs.core.first.call(null,seq__8533__$1);
var name = cljs.core.nth.call(null,vec__8540,(0),null);
var map__8541 = cljs.core.nth.call(null,vec__8540,(1),null);
var map__8541__$1 = ((((!((map__8541 == null)))?((((map__8541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8541):map__8541);
var doc = cljs.core.get.call(null,map__8541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8573 = cljs.core.next.call(null,seq__8533__$1);
var G__8574 = null;
var G__8575 = (0);
var G__8576 = (0);
seq__8533 = G__8573;
chunk__8534 = G__8574;
count__8535 = G__8575;
i__8536 = G__8576;
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