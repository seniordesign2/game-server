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
var seq__6712_6726 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6713_6727 = null;
var count__6714_6728 = (0);
var i__6715_6729 = (0);
while(true){
if((i__6715_6729 < count__6714_6728)){
var f_6730 = cljs.core._nth.call(null,chunk__6713_6727,i__6715_6729);
cljs.core.println.call(null,"  ",f_6730);

var G__6731 = seq__6712_6726;
var G__6732 = chunk__6713_6727;
var G__6733 = count__6714_6728;
var G__6734 = (i__6715_6729 + (1));
seq__6712_6726 = G__6731;
chunk__6713_6727 = G__6732;
count__6714_6728 = G__6733;
i__6715_6729 = G__6734;
continue;
} else {
var temp__4425__auto___6735 = cljs.core.seq.call(null,seq__6712_6726);
if(temp__4425__auto___6735){
var seq__6712_6736__$1 = temp__4425__auto___6735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6712_6736__$1)){
var c__5791__auto___6737 = cljs.core.chunk_first.call(null,seq__6712_6736__$1);
var G__6738 = cljs.core.chunk_rest.call(null,seq__6712_6736__$1);
var G__6739 = c__5791__auto___6737;
var G__6740 = cljs.core.count.call(null,c__5791__auto___6737);
var G__6741 = (0);
seq__6712_6726 = G__6738;
chunk__6713_6727 = G__6739;
count__6714_6728 = G__6740;
i__6715_6729 = G__6741;
continue;
} else {
var f_6742 = cljs.core.first.call(null,seq__6712_6736__$1);
cljs.core.println.call(null,"  ",f_6742);

var G__6743 = cljs.core.next.call(null,seq__6712_6736__$1);
var G__6744 = null;
var G__6745 = (0);
var G__6746 = (0);
seq__6712_6726 = G__6743;
chunk__6713_6727 = G__6744;
count__6714_6728 = G__6745;
i__6715_6729 = G__6746;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6747 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6747);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6747)))?cljs.core.second.call(null,arglists_6747):arglists_6747));
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
var seq__6716 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6717 = null;
var count__6718 = (0);
var i__6719 = (0);
while(true){
if((i__6719 < count__6718)){
var vec__6720 = cljs.core._nth.call(null,chunk__6717,i__6719);
var name = cljs.core.nth.call(null,vec__6720,(0),null);
var map__6721 = cljs.core.nth.call(null,vec__6720,(1),null);
var map__6721__$1 = ((((!((map__6721 == null)))?((((map__6721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6721):map__6721);
var doc = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6748 = seq__6716;
var G__6749 = chunk__6717;
var G__6750 = count__6718;
var G__6751 = (i__6719 + (1));
seq__6716 = G__6748;
chunk__6717 = G__6749;
count__6718 = G__6750;
i__6719 = G__6751;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6716);
if(temp__4425__auto__){
var seq__6716__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6716__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6716__$1);
var G__6752 = cljs.core.chunk_rest.call(null,seq__6716__$1);
var G__6753 = c__5791__auto__;
var G__6754 = cljs.core.count.call(null,c__5791__auto__);
var G__6755 = (0);
seq__6716 = G__6752;
chunk__6717 = G__6753;
count__6718 = G__6754;
i__6719 = G__6755;
continue;
} else {
var vec__6723 = cljs.core.first.call(null,seq__6716__$1);
var name = cljs.core.nth.call(null,vec__6723,(0),null);
var map__6724 = cljs.core.nth.call(null,vec__6723,(1),null);
var map__6724__$1 = ((((!((map__6724 == null)))?((((map__6724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6724):map__6724);
var doc = cljs.core.get.call(null,map__6724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__6724__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__6756 = cljs.core.next.call(null,seq__6716__$1);
var G__6757 = null;
var G__6758 = (0);
var G__6759 = (0);
seq__6716 = G__6756;
chunk__6717 = G__6757;
count__6718 = G__6758;
i__6719 = G__6759;
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