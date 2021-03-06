jQuery(window).load(function() {
    initializePage();
    jQuery("#referencesDialog").dialog({
        autoOpen: false
    }, {
        width: jQuery(window).width() * 0.75
    }, {
        height: jQuery(window).height() * 0.75
    });
    jQuery("#referencesButton").click(function() {
        refreshDialogs();
        jQuery("#referencesDialog").dialog("open")
    });
});

jQuery(window).resize(function() {
    if (jQuery("#referencesDialog").dialog("isOpen") === true) {
        refreshDialogs();
    }
    jQuery('#mainImage').css("height", jQuery(window).height());
});
/*jQuery(function() {
   
    jQuery("body").mousewheel(function(event, delta) {

      if(!jQuery("#referencesDialog").dialog("isOpen"))
      {
      this.scrollLeft -= (delta * 30);
      }
   });});*/

function refreshDialogs() {
    jQuery("#referencesDialog").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    });
    jQuery("#referencesDialog").dialog("option", "width", jQuery(window).width() * 0.75);
    jQuery("#referencesDialog").dialog("option", "height", jQuery(window).height() * 0.75);
}
var implementnew = [{
    "src": "timeline.svg",
    "text": "• Over 2010-2011, prices of important commodities rose significantly. \n\n• The World Bank's FPI (Food Price Index) rose 15% between October 2010 and January 2011. It nearly reached the same level as it was at during the 2007-2008 Food Price Crisis.\n\n• World Bank President warns that the world is \"one shock away from a global crisis\"\n\n• The situation began with poor weather conditions (excessive rains, floods, etc.) in farming countries such as Australia and China among others for important crops such as wheat. After that, export restrictions and limited supply drove demand for alternative cereals up thus increasing the price of all commodities.\n\n• The World Bank estimates that 44 million people fell into poverty (less than $1.25/day) as a result of this price increase. Poverty is directly linked with hunger and developmental deficiencies especially in children.\n\n• Additionally, malnutrition became more prevalent, particularly affecting vulnerable segments of the population such as infants and pregnant women.\nIn all, this event underscores the poor's vulnerability to climate change and its unequal access to food.\n\n• Source No.(s): 4, 29",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.027777777777777776,
            "y": 0.7728740581270183,
            "width": 0.015531660692951015,
            "height": 0.08180839612486544
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• A study by the Natural Resources Defense Council titled \"Wasted: How America Is Losing Up to 40 Percent of Its Food from Farm to Fork to Landfill\" provides insight into the incredible inefficiency of the U.S. Food System.\n\n• Several causes for this food waste were discussed:\n\t○ Harvest Phase\n\t\t§ A certain percentage of crops are lost every year to pests, disease, and poor weather conditions.\n\t\t§ Some commodities are in oversupply, meaning that farmers do not expend the labor to harvest them in order to maintain profitability.\n\t○ Post-Harvest to Packing\n\t\t§ Trimming processes such as deboning, peeling cause major losses. For example, a plant engineer states, “The rule of thumb in processing potatoes is that 50 percent of the potato goes out the back door as finished product.”\n\t\t§ Food is usually discarded past the sell-by date \n\t○ Retail\n\t\t§ A 2008 estimate states that 10% of total food in the US is lost at the retail stage.\n\t\t§ Customers cull food based on looks, and only select the ones that look \"perfect\"\n\t\t§ Waste is viewed as a sign of customer satisfaction and quality control. If lots of food is thrown away, then poor-quality items are removed and there is sufficient supply.\n\t○ Households\n\t\t§ Poor storage leading to spoilage of food\n\t\t§ Confusion over the term \"best by\" and \"use by\", both of which refer to peak performance, not necessarily food safety. The UK's Waste &amp; Resources Action Programme estimates that 20% of household food is thrown away in this manner.\n\n• Several comparisons are made, and show how the developed world is wasting food at the consumer level at an order of magnitude higher than the developing world.\n\n• Overall, these inefficiencies generate billions of dollars of loss annually for the United States, and show how hunger is a logistics problem, not a production problem.\n\n• Source No.(s): 14\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.0540621266427718,
            "y": 0.5392895586652314,
            "width": 0.017025089605734768,
            "height": 0.07534983853606028
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• With the advent of commercially available genetically modified crops, there is a possibility of feeding the whole world in the future.\t\n\n• However, the debate continues, and it only becomes more heated as the use of GM products begin to grow.\n\n• Positions of nations on the legality of GMO products vary significantly. For example, many have banned GM products, and some only legalize specific strains of GM crops.\n\n• Proponents of GM highlight its advantageous properties such as pest resistance and macronutrient supplementation. For example, \"golden rice\" is a strain of rice that contains Vitamin A, which does not occur naturally in rice.\n\n• Opponents, following the \"precautionary principle\", are skeptical of purported claims that GM crops will not taint nature's genetic pool or cause adverse health effects in humans.  \n\n• Current research indicates that there are no health concerns from GM crops.\n\n• Some advocate center and support both increasing GM crop testing and its usage. \n\n• In summary, an important debate is raised about a potential way to provide the world's population using technology. This could have potential ramification for technology's ability to aid future food production.\n\n• Source No.(s): 12\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.09348864994026285,
            "y": 0.7664155005382132,
            "width": 0.015830346475507767,
            "height": 0.08180839612486544
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Alarming Obesity rates, especially in the United States, Mexico, and Australia, call for immediately action.\n\n• Shocking statistics (1) paint part of the picture:\n\t○ 75-80% of middle aged men are overweight in Australia.\n\t○ Almost one of three children and teenagers aged 2-19 are overweight or obese in the United States.\n\n• Rob Moodie, an Australian professor, blames fast food culture for the increase in obesity. He states that targeted advertising are giving parents and children the wrong message. Children look up to their stars, and see them eating fast food. As a result, they do the same (1).\n\n• In general, the increase in consumption of fats and sugars have also caused a corresponding increase in the prevalence of obesity.\n\n• Obesity is linked to further non-communicable chronic diseases such as diabetes and heart disease and has potential implications for the future of this generation.\n\n• Overall, this shows that the food problem spans the entire spectrum ranging from malnutrition and chronic hunger in low-income countries to obesity and food waste in high-income countries. It means that a sustainable future must have not only sufficient quantities of food, but also sufficient quality of food.\n\n• Sources: 1, 2, 24",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.13799283154121864,
            "y": 0.5403659849300323,
            "width": 0.011051373954599762,
            "height": 0.07534983853606028
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• The State of California is currently suffering from a man-made drought. While residents have been told to cut consumption by over a third, companies such as Nestle and Walmart, in addition to agricultural operations, continue using large quantities of water (15).\n\n• Surface sources of water, such as the American River, have lost significant amounts of water due to evaporation and low flow from their respective sources (22).\n\n• A 2014 study found that this was the state's worst drought in over a millennium (5).\n\n• Climate change and human uses of water, including agribusiness and a burgeoning population, have been cited as the main reasons for this drought.\n\n• The drought is causing severe impacts on California's farms, and over 560,000 acres of cropland (approx. 7% of total farmland) were fallowed (5).\n\n• However, companies such as Nestle and Walmart still draw significant amounts of water. Agribusiness and fracking industries, together accounting for over 90% of the state's water use, still remain unaffected by legislation aimed at reducing water usage (15).\n\n• There's a clear disparity between a corporation's effect on the environment and their responsibility for it, as shown by how individual residents are punished if they \"waste water\" when the amount they use is minuscule compared to agribusiness and bottling companies.\nIn all, California serves as an important case study on the influence of corporations in policy and how the issues of water and food are political in nature.\n\n• Source No.(s): 5, 15, 22, 28\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.1586021505376344,
            "y": 0.767491926803014,
            "width": 0.028076463560334528,
            "height": 0.08073196986006459
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Nearly extinct species will be able to thrive as a result, and keep the marine ecosystem alive.\n\n• Sustainable techniques will allow for some level of fish consumption without majorly impacting the ocean.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7210274790919953,
            "y": 0.12271259418729817,
            "width": 0.03046594982078853,
            "height": 0.05705059203444564
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Improved sustainable farming techniques allow the world's most populous countries to be increasingly self-sufficient in terms of food, easing world hunger.\n\n• Desertification of arable land slows as intensive techniques are done away with resulting in a healthier soil that can support crops for far longer.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5612305854241338,
            "y": 0.11733046286329386,
            "width": 0.026583034647550775,
            "height": 0.059203444564047365
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• There is more available food, resulting in decreased prices for everyone and allowing food to become a basic right.\n\n• Less food would need to be grown if waste were to be eliminated, resulting in less pollution from agriculture.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.4405615292712067,
            "y": 0.10979547900968784,
            "width": 0.02031063321385902,
            "height": 0.07104413347685684
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• A healthy amount of land previously used for agribusiness is restored to original state, replenish important forests such as the Amazon.\n\n• Climate change is alleviated as a result of reductions in methane output from the agribusiness industry.\n\n• Water is now used sustainably while allowing underground sources to replenish. Water tables stabilize and draws do not impact the livelihood of surrounding communities.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.28703703703703703,
            "y": 0.1054897739504844,
            "width": 0.05794504181600956,
            "height": 0.07642626480086114
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Innovation allows even meat-lovers to enjoy the taste of meat without any of the environmental consequences.\n• In the future, it may be possible to completely eliminate meat from our diet to limit our impact on the environment. ",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.2589605734767025,
            "y": 0.29709364908503766,
            "width": 0.03912783751493429,
            "height": 0.06673842841765339
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Even those who live in arid and rural environments will be able to receive sufficient nutritional supplement to counteract the lack of available fresh foods.\n\n• Improving food security results in increased development in other areas such as politics and human rights. People who aren't hungry can begin to think of the future instead of thinking of food.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5032855436081243,
            "y": 0.29709364908503766,
            "width": 0.03763440860215054,
            "height": 0.06781485468245425
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• The more people there are, the more mouths to feed. If we curb the issue at the source by having reasonable population growth rates, then a standard of living can be assured for everyone.\n\n• Mainly, it will prevent a potentially catastrophic loss of life in the future once we exceed the world's maximum ability to sustain life.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.40651135005973715,
            "y": 0.30032292787944026,
            "width": 0.013142174432497013,
            "height": 0.06350914962325081
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Along with a reduced water draw, humans will finally start to move off nonrenewable water sources by closing the loop and recycling water from sewage.\n\n• It will help achieve global water security meaning people do not have to die from unclean water sources.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.6630824372759857,
            "y": 0.302475780409042,
            "width": 0.01971326164874552,
            "height": 0.05705059203444564
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• With more advanced crops, the majority of loss in developing countries could be eliminated, meaning more food for people.\n\n• Additionally, increased yield with less land will be needed to feed a growing population.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7974910394265233,
            "y": 0.2960172228202368,
            "width": 0.014336917562724014,
            "height": 0.07319698600645856
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• This helps with the quality of life overall, as people live healthier without dying from obesity or diabetes.\n\n• In the future, a healthy diet according to nutritional principles will be needed in order to develop the human race as a whole.",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.8243727598566308,
            "y": 0.11410118406889128,
            "width": 0.03255675029868578,
            "height": 0.062432723358449946
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Finally, spread the word! Your friends could benefit from this information, and more hands helping will improve this issue.\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5539754363283775,
            "y": 0.5034965034965035,
            "width": 0.003878474466709761,
            "height": 0.018648018648018648
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "4. By combining current statistics and projections, it can be reasonably extrapolated that without major change, the Sub-Saharan region will be subject to much more hunger than currently.\n\n5. Furthermore, food availability has been historically linked to riots and protests, making it reasonable to assume that in the event widespread famine occurs, there will definitely be civil unrest (17).\n\n• Source No.(s): 11, 17, 19\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.2410394265232975,
            "y": 0.77502691065662,
            "width": 0.02031063321385902,
            "height": 0.06566200215285253
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "1. At this current trend, the Population Reference Bereau in the US estimates that Africa's population will double by 2050, with most of the growth concentrated in the Sub-Saharan Region (3). \n\n2. As of 2015, the UN FAO estimates that approximately 240 million of people, or a quarter, in the Sub-Saharan region are undernourished. Additionally, 45% of children under 5 die of malnutrition (11). \n\n3. The poor economic and political conditions in the region also contribute to its volatility. Although significant economic growth is expected in the coming years, a lack of corresponding political improvement would still mean that the majority of the population will suffer from hunger.\n\nMouseover the Hamburger for more.\n\n• Source No.(s): 3, 11, 17, 19\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.22072879330943848,
            "y": 0.7685683530678149,
            "width": 0.02001194743130227,
            "height": 0.077502691065662
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "1. In a bid to feed their growing populations, many nations, including China and India, have resorted to intensive monocropping techniques, which deplete nutrients in the soil in an unsustainable manner.\n\n2. These techniques include the use of heavy machinery causing soil compaction, excessive use of fertilizers leading to eutrophication in nearby water sources, and the practice of growing one crop repeatedly (mono-cropping) which rapidly consumes nutrients in the soil causing desertification. Furthermore, mono-cropping increases the spread of plant disease, as every crop is of the same strain (10). \n\n3. The UN estimates that nearly 20 million acres of arable land is already lost every year due to improper agriculture (25).  \n\n4. If the current status quo is maintained, farmers currently blessed by record harvests in developing nations could face significant trouble in the future as their land begins to dry up.\nAccordingly, a spike in food prices could be expected as these nations produce the essential cereals that the world relies on for calories.\n\n• Source No.(s): 10, 25",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.29301075268817206,
            "y": 0.5511302475780409,
            "width": 0.026284348864994027,
            "height": 0.10010764262648009
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Currently, over half of the world's 37 largest aquifers are being stressed beyond capacity (27). \n\n•  Droughts are already occurring in previously thought secure regions. California, for example, is going through its worst drought in a thousand years (5).\n\n•  As surface sources of water (rivers, lakes) begin to dry up, people will eventually look to underground sources, which replenish at a much slower rate. \n\n•  Agriculture has been, and will continue to be, the largest use of water. When surface sources run out, farmers look for alternatives to keep feeding the growing demand. Some wheat farmers in China have resorted to pumping water from 300 meters below ground (6). \n\n• If we continue to deplete our aquifers at the current rate, by 2050, our groundwater sources could be severely depleted and become unusable, causing water shortages even in developed countries. This could have adverse effects on both crop production and the livelihood of people. In the worst case, drought-related deaths may begin to happen.\n\n• Source No.(s): 6, 27\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.37216248506571087,
            "y": 0.7771797631862217,
            "width": 0.023297491039426525,
            "height": 0.07319698600645856
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "•  Runoff from agribusiness causes hypoxia (lack of oxygen) in water basins, causing fish to be unable to reproduce in the water. These zones are Dead Zones.\n\n•  It is estimated that even right now, there are over 500 dead zones in the oceans as a result of this practice.\n\n•  For example, a famous dead zone is located in the Gulf of Mexico. Agriculture along the Mississippi causes nitrogen to flow into the Gulf, causing eutrophication and thus low oxygen conditions. \n\n•  In the future, if we continue to use fertilizers in agriculture at the current rate, more dead zones will inevitably develop all over the world causing a loss of marine life and polluting our drinking water.\n\n• Source No.(s): 13\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.516726403823178,
            "y": 0.767491926803014,
            "width": 0.022102747909199524,
            "height": 0.08396124865446716
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• GMO Technology promises to increase crop yield significantly by equipping plants with the genetics to fight off adverse factors affecting yield such as inclement weather and pests.\n\n• With more development in this area, it could be possible for important staples to be completely resistant to pest and diseases without the use of chemicals, leading to more sustainable agriculture overall.\n\n•  Currently, there is an increase in the use of GMOs, but people still exercise caution, and there are still many legal barriers to overcome.\n\n• Source No.(s): 30\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5713859020310633,
            "y": 0.5575888051668461,
            "width": 0.02180406212664277,
            "height": 0.09472551130247578
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Even now, the Amazon rainforest's area is declining at an alarming rate, mainly due to deforestation from agribusiness and illegal logging. Experts estimate that over a hundred plant, animal and insect species are lost every day due to deforestation (7).\n\n• Although the rainforest is important to the carbon cycle by sequestering CO2 and producing oxygen, we are cutting it down to create more land for agriculture, which generates more pollution.\n\n• The Amazon forest is home to millions of species, and its death would inevitably cause all of these animals and plants to go extinct, leading to a loss of biodiversity.\n\n• Projections by the Brazil National Institute of Research stated that the size of the Amazon rainforest could be halved by 2050 (7).\n\n• At this current rate, the Amazon Rainforest really will be unrecoverable, as a certain 'tipping point' is reached after which deserts start to claim the forest. Climate change will be exacerbated, causing many more deaths in oceans and other forests as a result of increasing temperatures.\n\n• Source No.(s): 7, 31\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.6612903225806451,
            "y": 0.767491926803014,
            "width": 0.01762246117084827,
            "height": 0.08503767491926803
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Social unrest and food prices have been historically linked with each other.\n\n• Other events described here (drought, loss of arable land) could possibly lead to significant price increases, especially in many of the cereals that the world relies on for food. \n\n• Past history have shown that there is an FPI (Food Price Index) threshold after which the chance of significant social unrest can happen. For example, the 2007-08 and 2010-2011 food price crises have led to riots in Syria, Yemen, Egypt among others. \n\n• Unequal access to food has always been a problem, but for the poorest people in the world, it will become bigger as prices increase.\n\n• In the future, low-income countries will bear a significant burden as their people cannot afford necessary food to avoid malnutrition and stunted human development. Without development, these countries will remain low-income forever.\n\n• Source No.(s): 20\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7168458781362007,
            "y": 0.5672766415500539,
            "width": 0.01881720430107527,
            "height": 0.08396124865446716
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Developed countries are expected to have lowering birthrates, but not enough to counteract the explosive growth from developing countries.\n\n• Growth is predicted to be highest in the Sub-Saharan region, where the average birth count per mother is already 5.2.\n\n• This means that by 2050, there will be 2.3 billion more mouths to feed. Food security will become an even larger issue in the coming years.\n\n• Source No.(s): 3\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7816606929510155,
            "y": 0.7578040904198062,
            "width": 0.044504181600955796,
            "height": 0.09149623250807319
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• There has been a general shift to energy dense foods such as fats and sugar recently, led by the \"fast food revolution,\" in which people eat more of the calorie-dense foods found in McDonalds and KFCs. Additionally, an increase in processed food consumption has led to increases in fat intake. \n\n• Without proper understanding of nutritional needs, even those in developed countries where food is plenty can suffer from deficiencies in Vitamins and dietary fibre.\n\n• A nutritional survey conducted in the USA reveals that the average consumption of dark greens and whole grains are each at less than 10 percent of recommended levels. Several chronic diseases such as diabetes and heart diseases are linked with unhealthy fat consumption.\n\n• Developing countries are also transitioning towards cheap vegetable oils for calorie intake, creating a problem where a population is composed simultaneously of both obese and hungry people. \nIn the future, if no action is taken, the world's nutritional intake could follow a downwards trend and make malnutrition widespread even when food is available.\n\n• Source No.(s): 16\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.8372162485065711,
            "y": 0.5748116254036598,
            "width": 0.021505376344086023,
            "height": 0.07427341227125941
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• One hamburger uses 660 gallons of water (32)\n\t\n• One pound of beef uses 2500 gallons of water (32)\n\t\n• Vote with your wallet. By simply abstaining from meat products, you're already conserving hundreds of gallons of water.\n\t\n• Since agribusiness is also linked to deforestation and aquifer depletion, you'll also be helping to ensure nature's survival, which is crucial if we are to have food in the future.\n\n• Source No.(s): 32",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5575307045895281,
            "y": 0.4405594405594406,
            "width": 0.004201680672268907,
            "height": 0.023310023310023312
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Shockingly, in the US, 10% of all food is wasted at the consumption stage (14). \n\t\n• High-income societies tend to be guilty of waste, as food is cheap, plentiful, and completely disconnected from their lives (14).\n\t\n• Or is it? Our food comes from farmers, who very often are starving themselves. Food that we throw away goes into landfills, which are filling up at amazing rates. \n\t\n• The world isn't running out of food anytime soon, but your actions can help prevent waste leading to more food being available for other people.\n\t\n• You can help prevent this by planning out your food purchases, saving leftovers, controlling portion sizes to avoid waste. Remember these three words: Think, Eat, Save.\n\n• Source No.(s): 14\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.521978021978022,
            "y": 0.4603729603729604,
            "width": 0.004201680672268907,
            "height": 0.022144522144522144
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Although food has become more plentiful, we're eating the worst of it. Vegetable oils and sugars, mainly present in fast food and processed foods, have begun to take over our diet.\n\t\n• On the other hand, consumption of fresh greens and whole grains is lowering. Even people who can afford sufficient quantities of food can face malnutrition if they don't eat properly.\n\t\n• MyPlate (choosemyplate.gov) can help you make good nutritional choices. Healthy people live longer, and can contribute more to a productive society.\n\t\n• Source No.(s): 16",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.5126050420168067,
            "y": 0.4825174825174825,
            "width": 0.003878474466709761,
            "height": 0.019813519813519812
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Consumption habits of customers have led to overfishing, causing endangered species such as Atlantic Cod, Bluefin Tuna, Sturgeon, and Atlantic Salmon to become nearly extinct.\n\n• Addititionally, many fishers use indiscriminate methods for their hauls, causing all types of fish to be caught regardless of type. This wastes a large number each year, with some estimating that five untargeted fish are caught for every one targeted. \n\n• The FAO estimates that 3/4 of fisheries are either nearly fully exploited or fully exploited. This shows how we are reaching the limit of earth's ability to produce fish (32).\n\n• Assuming the current trend continues, the world's supply of fish will be severely strained in the future, and cause a major loss of marine life. The most affected regions would become essentially devoid of fish as there is no opportunity for them to reproduce.\n\n• Source No.(s): 21, 32\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.4244324970131422,
            "y": 0.5651237890204521,
            "width": 0.027180406212664276,
            "height": 0.07965554359526372
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• While doing business in agriculture, you will inevitably use large quantities of resources. This is unavoidable, and it's naïve to think otherwise.\n\n• However, by using best sustainability practices, you will ensure that you're getting the most return for capital, and help ensure the survival of your business too. No water, no crops. No crops, no money.\n\t\n• Several studies have shown that crop rotation is one of the most effective things you can do. By changing the crop you grow each season, pests, which often target specific crops, will come in fewer numbers. You'll also be replenishing nutrients in the soil without having to use a large number of chemical fertilizers.\n\t\n• Other methods also enrich the soil and allow crops to grow better. They can be found in the References section on the bottom right corner.\n\n• Source No.(s): 23",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7333548804137039,
            "y": 0.44871794871794873,
            "width": 0.003878474466709761,
            "height": 0.019813519813519812
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• As people who make food, you know suppliers better than anyone. This means the many choices you make can affect what consumers eat as a whole.\n\n• The first step to being sustainable is sourcing locally. By sourcing from nearby sources, you both save on transportation costs, and lower pollution in the atmosphere.\n\n• Your suppliers want to continue a good business relationship, and you can influence them by choosing the best ones that engage in the most sustainable practices.\n\n• By processing food, you control what suppliers sell and what consumers eat. This is a unique advantage, allowing you to create a global impact.\n\n• Source No.(s): 16",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7330316742081447,
            "y": 0.4696969696969697,
            "width": 0.004201680672268907,
            "height": 0.017482517482517484
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Selling food retail is tough. You've got to make sure you have enough of what consumers want, yet not overstock and waste food. In spite of this, many stores still think the \"pile em' high, watch 'em fly\" philosophy is the ultimate way to sell stuff.\n\t\n• It's not. Proper planning and analysis of trends is the best way to sell things, not stocking everything under the sun.\n\n• Stop &amp; Shop, a popular American supermarket chain, saved $100 million dollars by conducting proper analysis on what customers actually wanted. It wasted less food, offered fresher products, and raised customer satisfaction. \n\n• The choices you make can impact food waste significantly. An industry consultant describes, \"one in seven truckloads of perishables delivered to supermarkets is thrown away.\" That's one more than what it should be. Remember, there are many people who would love to buy from bargain bins full of nearly-expired food.\n\n• Stock smart, waste less, make money. A win-win for you and your customers. \n\n• Source No.(s): 16",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.7388493859082095,
            "y": 0.48834498834498835,
            "width": 0.004201680672268907,
            "height": 0.02097902097902098
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Governments, as policy legislators, command an immense level of power in these issues.\n\t\n• Food is key to a stable society as shown, making it paramount that you support initiatives in sustainable agriculture.\n\t\n• In fact, many programs of these kind already exist at the international level. For example, the UNEP 10-Year Framework of Programmes on Sustainable Consumption and Production Patterns (10YFP) exists, and many states are already involved (26). \n\t\n• Further involvement in these programs will further world development, allowing food supply to last longer, and healthier people too.\n\t\n• Additionally, look to local talent for ideas. Educational institutions are often where the best ideas come from, and promoting these concepts within Primary through Tertiary education will breed creative ideas to help solve sustainable farming.\n\n• Source No.(s): 26",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.8946347769877182,
            "y": 0.4393939393939394,
            "width": 0.003555268261150614,
            "height": 0.022144522144522144
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• It's a concept that works. Offer motivation, and people are impelled to act\n\t\n• Various organizations have already implemented this to some degree. For example, the USDA has the Conservation Reserve Program, which pays rent to farmers who plant species that improve environmental quality (8).\n\t\n• One other possible method is a tax relief for those who engage in sustainable practices as the UK Government, which provides tax incentives to those which use energy-efficient appliances (33).\n\t\n• By offering incentives, individuals and companies will receive the initial boost needed to change their inertial behavior and hopefully make it a habit. \n\n• Source No.(s): 8, 33",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.9114414996767938,
            "y": 0.4627039627039627,
            "width": 0.003555268261150614,
            "height": 0.018648018648018648
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}, {
    "src": "timeline.svg",
    "text": "• Externalized costs (n.): a term used to describe a cost of production paid by someone else.\n\n• Sounds nice, doesn't it. Someone else pay, not me!\n\t\n• Turns out, \"someone\" is misleading. It's everyone that pays. Your citizens breathe polluted air. They eat unhealthy food laden with pesticides. Your most opportunity-deprived people go hungry while companies use nature like it's free (34).\n\t\n• This is why, as a government, you need to increase the barriers to nature. Tying in with the concept of incentives, the complement is punishments.\n\t\n• Carbon Tax is one possible solution, in which entities pay for the pollution they emit. Others include tax rebates for those who engage in some level of sustainability practices. However, a general solution should be a comprehensive environmental law that ensures that companies do not use nature recklessly.\n\t\n• As a government, you have the ability to take charge of your own country. This would bring us closer to the sustainable farming and healthy eating which should be common in the 21st century today.\n\n• Source No.(s): 34\n\n",
    "shapes": [{
        "type": "rect",
        "geometry": {
            "x": 0.8972204266321914,
            "y": 0.4825174825174825,
            "width": 0.004524886877828055,
            "height": 0.019813519813519812
        },
        "style": {}
    }],
    "context": "http://ja5087.github.io/2050futures/",
    "editable": false
}];

function loadPopupstream() {
    for (i = 0; i < Object.keys(implementnew).length; i++) {
        anno.addAnnotation(implementnew[i]);
    }
    anno.showAnnotations();
};
window.onresize = resetAnnotations;

function resetAnnotations() {
    anno.reset();
    loadPopupstream();
}

function initializePage() {
    jQuery('#mainImage').css("height", jQuery(window).height());
    anno.reset();
    //anno.makeAnnotatable(document.getElementById('mainImage'));
    window.scrollTop = 0;
    anno.hideSelectionWidget();
    jQuery("#mainImage").animate({
        opacity: 1
    }, 2000, "easeInExpo", function() {
        jQuery('body').css("background-color", "#59ABE3");
        loadPopupstream();
    });
    jQuery("#referencesButton").animate({
        opacity: 1
    }, 500, "swing");
    anno.addHandler('onPopupShown', function() {
        anno.hideAnnotations();
        //jQuery('body').animate({scrollTop: document.body.scrollHeight}, 300, anno.showAnnotations());
        jQuery('.annotorious-popup-text').stop(true, false);
        jQuery('body').animate({
            scrollTop: document.body.scrollHeight - jQuery('.annotorious-popup-text').offset().top
        }, 300, anno.showAnnotations());
    });
    anno.addHandler('beforePopupHide', function() {
        anno.hideAnnotations();
        jQuery('.annotorious-popup-text').stop(true, false);
        jQuery('body').animate({
            scrollTop: "0px"
        }, 300, anno.showAnnotations());
    });
}