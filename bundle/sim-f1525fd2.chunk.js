import{ef as e,A as a,eg as s,aP as l,e4 as t,L as d,l as n,m as i,eh as p,ei as c,ej as r,ek as I,el as o,em as m,_ as u,E as h,ci as v,cd as g,cg as S,T as A,a0 as O,F as f,bb as T,bc as R,az as y,bl as G,w as P,B as k,aA as L,S as b,a$ as C,g as E,t as N,bA as w}from"./detailed_results-2578d4ef.chunk.js";import{i as W,t as F,b as H,c as V,r as M,T as j,n as x,I as B}from"./preset_utils-6f15d854.chunk.js";import{T as q}from"./totem_inputs-42a94ef0.chunk.js";const D=W({fieldName:"thunderstormRange",label:"Thunderstorm In Range",labelTooltip:"When set to true, thunderstorm casts will cause damage.",getValue:e=>e.getSpecOptions().thunderstormRange==s.TSInRange,setValue:(e,a,l)=>{const t=a.getSpecOptions();t.thunderstormRange=l?s.TSInRange:s.TSOutofRange,a.setSpecOptions(e,t)}}),U=F({fieldName:"shield",values:[{value:e.NoShield,tooltip:"No Shield"},{actionId:a.fromSpellId(57960),value:e.WaterShield},{actionId:a.fromSpellId(49281),value:e.LightningShield}]}),_={items:[{id:40516,enchant:3820,gems:[41285,40027]},{id:44661,gems:[39998]},{id:40286,enchant:3810},{id:44005,enchant:3722,gems:[40027]},{id:40514,enchant:3832,gems:[42144,42144]},{id:40324,enchant:2332,gems:[42144,0]},{id:40302,enchant:3246,gems:[0]},{id:40301,gems:[40014]},{id:40560,enchant:3721},{id:40519,enchant:3826},{id:37694},{id:40399},{id:40432},{id:40255},{id:40395,enchant:3834},{id:40401,enchant:1128},{id:40267}]},z={items:[{id:46209,enchant:3820,gems:[41285,40048]},{id:45933,gems:[39998]},{id:46211,enchant:3810,gems:[39998]},{id:45242,enchant:3722,gems:[39998]},{id:46206,enchant:3832,gems:[39998,39998]},{id:45460,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45616,enchant:3599,gems:[39998,39998,39998]},{id:46210,enchant:3721,gems:[39998,40027]},{id:45537,enchant:3606,gems:[39998,40027]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45518},{id:40255},{id:45612,enchant:3834,gems:[39998]},{id:45470,enchant:1128,gems:[39998]},{id:40267}]},K={items:[{id:48323,enchant:3820,gems:[41285,40155]},{id:47144,gems:[40155]},{id:48321,enchant:3810,gems:[40113]},{id:47552,enchant:3722,gems:[40113]},{id:48325,enchant:3832,gems:[40113,40132]},{id:45460,enchant:2332,gems:[40113,0]},{id:48324,enchant:3604,gems:[40155,0]},{id:47084,enchant:3599,gems:[40132,40113,40113]},{id:47190,enchant:3721,gems:[40113,40113,40113]},{id:47099,enchant:3606,gems:[40113,40113]},{id:46046,gems:[40155]},{id:45495,gems:[40113]},{id:47188},{id:45518},{id:46980,enchant:3834,gems:[40113]},{id:47085,enchant:1128,gems:[40155]},{id:47666}]},$={items:[{id:48328,enchant:3820,gems:[41285,40153]},{id:47468,gems:[40155]},{id:48330,enchant:3810,gems:[40113]},{id:47551,enchant:3722,gems:[40113]},{id:48326,enchant:3832,gems:[40113,40132]},{id:45460,enchant:2332,gems:[40113,0]},{id:48327,enchant:3604,gems:[40155,0]},{id:47447,enchant:3599,gems:[40132,40113,40113]},{id:47479,enchant:3721,gems:[40113,40113,40113]},{id:47456,enchant:3606,gems:[40113,40113]},{id:46046,gems:[40155]},{id:45495,gems:[40113]},{id:47477},{id:45518},{id:47422,enchant:3834,gems:[40113]},{id:47448,enchant:1128,gems:[40155]},{id:47666}]},J={items:[{id:51237,enchant:3820,gems:[41285,40113]},{id:50658,gems:[40155]},{id:50698,enchant:3810,gems:[40113,40113]},{id:50628,enchant:3722,gems:[40155]},{id:51239,enchant:3832,gems:[40113,40134]},{id:50687,enchant:2332,gems:[40155,0]},{id:51238,enchant:3604,gems:[40113,0]},{id:50613,gems:[40113,40113,40113]},{id:51236,enchant:3721,gems:[40113,40155]},{id:50699,enchant:3826,gems:[40134,40113]},{id:50398,gems:[40155]},{id:50664,gems:[40113]},{id:50348},{id:50365},{id:50734,enchant:3834,gems:[40113]},{id:50616,enchant:1128,gems:[40155]},{id:50458}]},Q={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:3738}}},doAtValue:{const:{val:"-6s"}}},{action:{castSpell:{spellId:{spellId:58643}}},doAtValue:{const:{val:"-5s"}}},{action:{castSpell:{spellId:{spellId:58774}}},doAtValue:{const:{val:"-4s"}}},{action:{castSpell:{spellId:{spellId:57722}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{spellId:58704}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},{spellIsReady:{spellId:{tag:-1,spellId:2825}}}]}},castSpell:{spellId:{tag:-1,spellId:2825}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"2s"}}}},{spellIsReady:{spellId:{spellId:2825}}}]}},castSpell:{spellId:{spellId:2825}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:26297}}},{spellIsReady:{spellId:{spellId:16166}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:26297}}},{castSpell:{spellId:{spellId:16166}}}]}}},{action:{condition:{and:{vals:[{not:{val:{spellIsReady:{spellId:{spellId:26297}}}}},{not:{val:{spellIsReady:{spellId:{spellId:16166}}}}},{not:{val:{auraIsActive:{auraId:{spellId:64701}}}}},{not:{val:{auraIsActive:{auraId:{spellId:26297}}}}}]}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{and:{vals:[{spellIsReady:{spellId:{spellId:2894}}},{or:{vals:[{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{itemId:37660}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{auraIsActive:{auraId:{itemId:47213}}},{auraIsActive:{auraId:{itemId:45490}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:71570}}},{auraIsActive:{auraId:{spellId:71572}}},{auraIsActive:{auraId:{spellId:72416}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{itemId:50353}}},rhs:{const:{val:"9"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{itemId:50348}}},rhs:{const:{val:"9"}}}},{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:60486}}},rhs:{const:{val:"10"}}}}]}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{itemId:40212}}},{castSpell:{spellId:{itemId:37873}}},{castSpell:{spellId:{itemId:45148}}},{castSpell:{spellId:{itemId:48724}}},{castSpell:{spellId:{itemId:50357}}},{castSpell:{spellId:{spellId:2894}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58704}}}}}]}},castSpell:{spellId:{spellId:58704}}}},{action:{multidot:{spellId:{spellId:49233},maxDots:3,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},{spellIsReady:{spellId:{spellId:49271}}}]}},castSpell:{spellId:{spellId:49271}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:60043}}}},{action:{castSpell:{spellId:{spellId:49238}}}}]},X={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:59159}}},doAtValue:{const:{val:"-5"}}},{action:{castSpell:{spellId:{spellId:49238}}},doAtValue:{const:{val:"-3.5"}}},{action:{castSpell:{spellId:{spellId:49271}}},doAtValue:{const:{val:"-1.5"}}}],priorityList:[{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}}]}},castSpell:{spellId:{spellId:2825,tag:-1}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}}]}},castSpell:{spellId:{spellId:2825}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:16166}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.1s"}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{and:{vals:[{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:64741}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:67669}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:40432}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:45308}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50340}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50345}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50353}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50348}}},rhs:{const:{val:"10"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60479}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60064}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60064}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:60494}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60494}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:64741}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:64741}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:64713}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:64713}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:67669}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:67669}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:71605}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:71605}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:71636}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:71636}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:75466}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:75466}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:75473}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:50353}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:50353}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:50348}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:50348}}},rhs:{const:{val:"1s"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{itemId:40212}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:55637}}},{auraIsActive:{auraId:{spellId:72416}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{itemId:40212}}},rhs:{const:{val:"1s"}}}}]}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"120s"}}}}]}},{or:{vals:[{auraIsActive:{auraId:{spellId:60479}}},{auraIsActive:{auraId:{spellId:60064}}},{auraIsActive:{auraId:{spellId:60494}}},{auraIsActive:{auraId:{spellId:64741}}},{auraIsActive:{auraId:{spellId:64713}}},{auraIsActive:{auraId:{spellId:67669}}},{auraIsActive:{auraId:{spellId:71605}}},{auraIsActive:{auraId:{spellId:71636}}},{auraIsActive:{auraId:{spellId:75466}}},{auraIsActive:{auraId:{spellId:75473}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:40432}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:45308}}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50340}}},rhs:{const:{val:"10"}}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{itemId:50345}}},rhs:{const:{val:"10"}}}}]}}]}}]}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:33697}}},{castSpell:{spellId:{itemId:37873}}},{castSpell:{spellId:{itemId:45148}}},{castSpell:{spellId:{itemId:48724}}},{castSpell:{spellId:{itemId:50357}}},{castSpell:{spellId:{spellId:2894}}}]}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}},{not:{val:{spellIsReady:{spellId:{spellId:2894}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58704}}}}},{not:{val:{dotIsActive:{spellId:{spellId:58734}}}}}]}},castSpell:{spellId:{spellId:58704}}}},{action:{multidot:{spellId:{spellId:49233},maxDots:3,maxOverlap:{const:{val:"250ms"}}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{spellCastTime:{spellId:{spellId:60043}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:60043}}}}}]}},castSpell:{spellId:{spellId:60043}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49271}}},rhs:{const:{val:".92s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:49271}}}}},{cmp:{op:"OpGe",lhs:{currentManaPercent:{}},rhs:{math:{op:"OpAdd",lhs:{remainingTimePercent:{}},rhs:{const:{val:"4%"}}}}}}]}},castSpell:{spellId:{spellId:49271}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{spellCastTime:{spellId:{spellId:49238}}},rhs:{const:{val:"1.00s"}}}},castSpell:{spellId:{itemId:40211}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"60s"}}}},castSpell:{spellId:{spellId:33697}}}},{action:{castSpell:{spellId:{itemId:42641}}}},{action:{castSpell:{spellId:{itemId:41119}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:49238}}}}},castSpell:{spellId:{spellId:49236}}}},{action:{castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:59159}}}}]},Y=H("Pre-raid Preset",{items:[{id:37180,enchant:3820,gems:[41285,42144]},{id:37595},{id:37673,enchant:3810,gems:[42144]},{id:41610,enchant:3722},{id:39592,enchant:3832,gems:[42144,40025]},{id:37788,enchant:2332,gems:[0]},{id:39593,enchant:3246,gems:[40051,0]},{id:40696,gems:[40049,39998]},{id:37791,enchant:3719},{id:44202,enchant:3826,gems:[39998]},{id:43253,gems:[40027]},{id:37694},{id:40682},{id:37873},{id:41384,enchant:3834},{id:40698},{id:40708}]}),Z=H("P1 Preset",_),ee=H("P2 Preset",z),ae=H("P3 Preset [A]",K,{faction:l.Alliance}),se=H("P3 Preset [H]",$,{faction:l.Horde}),le=H("P4 Preset",J),te=V("Default",Q),de=V("Advanced",X),ne={name:"Standard",data:t.create({talentsString:"0533001523213351322301351-005050031",glyphs:d.create({major1:n.GlyphOfFlametongueWeapon,major2:n.GlyphOfTotemOfWrath,major3:n.GlyphOfLightningBolt,minor1:i.GlyphOfThunderstorm,minor2:i.GlyphOfWaterShield,minor3:i.GlyphOfGhostWolf})})},ie=p.create({shield:e.WaterShield,totems:c.create({earth:r.StrengthOfEarthTotem,air:I.WrathOfAirTotem,fire:o.TotemOfWrath,water:m.ManaSpringTotem,useFireElemental:!0})}),pe={distanceFromTarget:20,profession1:u.Engineering,profession2:u.Tailoring,nibelungAverageCasts:11},ce=h.create({defaultPotion:v.PotionOfWildMagic,flask:g.FlaskOfTheFrostWyrm,food:S.FoodFishFeast}),re=M(b.SpecElementalShaman,{cssClass:"elemental-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],warnings:[e=>({updateOn:A.onAny([e.player.rotationChangeEmitter,e.player.currentStatsEmitter]),getContent:()=>{const a=e.player.getCurrentStats().sets.includes("Skyshatter Regalia (2pc)"),s=e.player.getSpecOptions().totems,l=s&&s.earth&&s.air&&s.fire&&s.water;return a&&!l?"T6 2pc bonus is equipped, but inactive because not all 4 totem types are being used.":""}})],epStats:[O.StatIntellect,O.StatSpellPower,O.StatSpellHit,O.StatSpellCrit,O.StatSpellHaste,O.StatMP5],epReferenceStat:O.StatSpellPower,displayStats:[O.StatHealth,O.StatMana,O.StatStamina,O.StatIntellect,O.StatSpellPower,O.StatSpellHit,O.StatSpellCrit,O.StatSpellHaste,O.StatMP5],modifyDisplayStats:e=>{let a=new f;return a=a.addStat(O.StatSpellHit,e.getTalents().elementalPrecision*T),a=a.addStat(O.StatSpellCrit,1*e.getTalents().tidalMastery*R),{talents:a}},defaults:{gear:se.gear,epWeights:f.fromMap({[O.StatIntellect]:.22,[O.StatSpellPower]:1,[O.StatSpellCrit]:.67,[O.StatSpellHaste]:1.29,[O.StatMP5]:.08}),consumes:ce,talents:ne.data,specOptions:ie,other:pe,raidBuffs:y.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:G.TristateEffectImproved,moonkinAura:G.TristateEffectImproved,sanctifiedRetribution:!0,demonicPactSp:500,wrathOfAirTotem:!0}),partyBuffs:P.create({}),individualBuffs:k.create({blessingOfKings:!0,blessingOfWisdom:2,vampiricTouch:!0}),debuffs:L.create({faerieFire:G.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,curseOfElements:!0,shadowMastery:!0,heartOfTheCrusader:!0})},playerIconInputs:[U],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[D,j,x]},customSections:[q],encounterPicker:{showExecuteProportion:!1},presets:{talents:[ne],rotations:[te,de],gear:[Y,Z,ee,ae,se,le]},autoRotation:e=>te.rotation.rotation,raidSimPresets:[{spec:b.SpecElementalShaman,tooltip:C[b.SpecElementalShaman],defaultName:"Elemental",iconUrl:E(N.ClassShaman,0),talents:ne.data,specOptions:ie,consumes:ce,defaultFactionRaces:{[l.Unknown]:w.RaceUnknown,[l.Alliance]:w.RaceDraenei,[l.Horde]:w.RaceOrc},defaultGear:{[l.Unknown]:{},[l.Alliance]:{1:Z.gear,2:ee.gear,3:ae.gear,4:le.gear},[l.Horde]:{1:Z.gear,2:ee.gear,3:se.gear,4:le.gear}}}]});class Ie extends B{constructor(e,a){super(e,a,re)}}export{Ie as E};
//# sourceMappingURL=sim-f1525fd2.chunk.js.map
