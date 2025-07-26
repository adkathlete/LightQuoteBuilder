const ZTABLE ={
  "Z-DECIMAL": [0.0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09],
  "-3.6":[0.000159109,0.000153099,0.000147302,0.000141711,0.000136319,0.00013112,0.000126108,0.000121275,0.000116617,0.000112127],
  "-3.5":[0.000232629,0.000224053,0.000215773,0.00020778,0.000200064,0.000192616,0.000185427,0.000178491,0.000171797,0.000165339],
  "-3.4":[0.000336929,0.000324814,0.000313106,0.000301791,0.000290857,0.000280293,0.000270088,0.000260229,0.000250707,0.00024151],
  "-3.3":[0.000483424,0.00046648,0.000450087,0.00043423,0.000418892,0.000404058,0.000389712,0.000375841,0.000362429,0.000349463],
  "-3.2":[0.000687138,0.000663675,0.000640953,0.000618951,0.000597648,0.000577025,0.000557061,0.000537737,0.000519035,0.000500937],
  "-3.1":[0.000967603,0.000935437,0.000904255,0.000874032,0.000844739,0.000816352,0.000788846,0.000762195,0.000736375,0.000711364],
  "-3.0":[0.001349898,0.001306238,0.001263873,0.001222769,0.001182891,0.001144207,0.001106685,0.001070294,0.001035003,0.001000782],
  "-2.9":[0.001865813,0.001807144,0.001750157,0.00169481,0.001641061,0.00158887,0.001538195,0.001488999,0.001441242,0.001394887],
  "-2.8":[0.00255513,0.002477075,0.002401182,0.0023274,0.002255677,0.002185961,0.002118205,0.002052359,0.001988376,0.00192620],
  "-2.7":[0.003466974,0.00336416,0.003264096,0.003166716,0.003071959,0.002979763,0.002890068,0.002802815,0.002717945,0.002635402],
  "-2.6":[0.004661188,0.004527111,0.004396488,0.004269243,0.004145301,0.004024589,0.003907033,0.003792562,0.003681108,0.003572601],
  "-2.5":[0.006209665,0.006036558,0.005867742,0.005703126,0.005542623,0.005386146,0.005233608,0.005084926,0.004940016,0.004798797],
  "-2.4":[0.008197536,0.00797626,0.007760254,0.007549411,0.007343631,0.007142811,0.006946851,0.006755653,0.006569119,0.006387155],
  "-2.3":[0.01072411,0.010444077,0.010170439,0.009903076,0.00964187,0.009386706,0.009137468,0.008894043,0.008656319,0.008424186],
  "-2.2":[0.013903448,0.013552581,0.013209384,0.012873721,0.012545461,0.012224473,0.011910625,0.011603792,0.011303844,0.011010658],
  "-2.1":[0.017864421,0.017429178,0.017003023,0.016585807,0.016177383,0.015777607,0.015386335,0.015003423,0.014628731,0.014262118],
  "-2.0":[0.022750132,0.022215594,0.021691694,0.02117827,0.020675163,0.020182215,0.01969927,0.019226172,0.018762766,0.0183089],
  "-1.9":[0.02871656,0.028066607,0.02742895,0.026803419,0.026189845,0.02558806,0.024997895,0.024419185,0.023851764,0.023295468],
  "-1.8":[0.035930319,0.035147894,0.034379502,0.033624969,0.032884119,0.032156775,0.031442763,0.030741909,0.030054039,0.02937898],
  "-1.7":[0.044565463,0.043632937,0.042716221,0.041815138,0.040929509,0.040059157,0.039203903,0.03836357,0.03753798,0.036726956],
  "-1.6":[0.054799292,0.053698928,0.052616138,0.051550748,0.050502583,0.049471468,0.048457226,0.047459682,0.046478658,0.04551397],
  "-1.5":[0.066807201,0.065521712,0.064255488,0.063008364,0.061780177,0.060570758,0.059379941,0.058207556,0.057053433,0.055917403],
  "-1.4":[0.080756659,0.079269841,0.077803841,0.07635851,0.0749337,0.07352926,0.072145037,0.070780877,0.069436623,0.068112118],
  "-1.3":[0.096800485,0.095097918,0.093417509,0.091759136,0.090122672,0.088507991,0.086914962,0.085343451,0.083793322,0.082264439],
  "-1.2":[0.11506967,0.113139446,0.111232437,0.109348552,0.107487697,0.105649774,0.103834681,0.102042315,0.100272568,0.09852532],
  "-1.1":[0.135666061,0.133499513,0.131356881,0.129238112,0.127143151,0.125071936,0.123024403,0.121000484,0.119000107,0.117023196],
  "-1.0":[0.158655254,0.156247645,0.15386423,0.151505003,0.14916995,0.146859056,0.1445723,0.142309654,0.14007109,0.137856572],
  "-0.9":[0.184060125,0.181411255,0.17878638,0.176185542,0.17360878,0.171056126,0.168527607,0.166023246,0.163543059,0.16108706],
  "-0.8":[0.211855399,0.208970088,0.206108054,0.203269392,0.200454193,0.197662543,0.194894521,0.192150202,0.189429655,0.186732943],
  "-0.7":[0.241963652,0.238852068,0.235762498,0.232695092,0.229649997,0.226627352,0.223627292,0.220649946,0.217695438,0.214763884],
  "-0.6":[0.274253118,0.270930904,0.267628893,0.264347292,0.2610863,0.257846111,0.254626915,0.251428895,0.24825223,0.24509709],
  "-0.5":[0.308537539,0.305025731,0.301531788,0.298055965,0.294598516,0.291159687,0.287739719,0.284338849,0.280957309,0.277595325],
  "-0.4":[0.344578258,0.340902974,0.337242727,0.333597821,0.329968554,0.32635522,0.32275811,0.319177509,0.315613697,0.312066949],
  "-0.3":[0.382088578,0.378280478,0.374484165,0.370699981,0.366928264,0.363169349,0.359423567,0.355691245,0.351972708,0.348268273],
  "-0.2":[0.420740291,0.416833837,0.412935577,0.409045885,0.405165128,0.401293674,0.397431887,0.393580127,0.389738752,0.3859081197],
  "-0.1":[0.460172163,0.456204687,0.452241574,0.448283213,0.444329995,0.440382308,0.436440537,0.432505068,0.428576284,0.424654565],
  "-0.0":[0.5,0.496010644,0.492021686,0.488033527,0.484046563,0.480061194,0.476077817,0.47209683,0.468118628,0.464143607],
  "0.0":[0.5,0.503989356,0.507978314,0.511966473,0.515953437,0.519938806,0.523922183,0.52790317,0.531881372,0.535856393],
  "0.1":[0.539827837,0.543795313,0.547758426,0.551716787,0.555670005,0.559617692,0.563559463,0.567494932,0.571423716,0.575345435],
  "0.2":[0.579259709,0.583166163,0.587064423,0.590954115,0.594834872,0.598706326,0.602568113,0.606419873,0.610261248,0.614091881],
  "0.3":[0.617911422,0.621719522,0.625515835,0.629300019,0.633071736,0.636830651,0.640576433,0.644308755,0.648027292,0.651731727],
  "0.4":[0.655421742,0.659097026,0.662757273,0.666402179,0.670031446,0.67364478,0.67724189,0.680822491,0.684386303,0.687933051],
  "0.5":[0.691462461,0.694974269,0.698468212,0.701944035,0.705401484,0.708840313,0.712260281,0.715661151,0.719042691,0.722404675],
  "0.6":[0.725746882,0.729069096,0.732371107,0.735652708,0.7389137,0.742153889,0.745373085,0.748571105,0.75174777,0.754902906],
  "0.7":[0.758036348,0.761147932,0.764237502,0.767304908,0.770350003,0.773372648,0.776372708,0.779350054,0.782304562,0.785236116],
  "0.8":[0.788144601,0.791029912,0.793891946,0.796730608,0.799545807,0.802337457,0.805105479,0.807849798,0.810570345,0.813267057],
  "0.9":[0.815939875,0.818588745,0.82121362,0.823814458,0.82639122,0.828943874,0.831472393,0.833976754,0.836456941,0.83891294],
  "1.0":[0.841344746,0.843752355,0.84613577,0.848494997,0.85083005,0.853140944,0.8554277,0.857690346,0.85992891,0.862143428],
  "1.1":[0.864333939,0.866500487,0.868643119,0.870761888,0.872856849,0.874928064,0.876975597,0.878999516,0.880999893,0.882976804],
  "1.2":[0.88493033,0.886860554,0.888767563,0.890651448,0.892512303,0.894350226,0.896165319,0.897957685,0.899727432,0.901474671],
  "1.3":[0.903199515,0.904902082,0.906582491,0.908240864,0.909877328,0.911492009,0.913085038,0.914656549,0.916206678,0.917735561],
  "1.4":[0.919243341,0.920730159,0.922196159,0.92364149,0.9250663,0.92647074,0.927854963,0.929219123,0.930563377,0.931887882],
  "1.5":[0.933192799,0.934478288,0.935744512,0.936991636,0.938219823,0.939429242,0.940620059,0.941792444,0.942946567,0.944082597],
  "1.6":[0.945200708,0.946301072,0.947383862,0.948449252,0.949497417,0.950528532,0.951542774,0.952540318,0.953521342,0.954486023],
  "1.7":[0.955434537,0.956367063,0.957283779,0.958184862,0.959070491,0.959940843,0.960796097,0.96163643,0.96246202,0.963273044],
  "1.8":[0.964069681,0.964852106,0.965620498,0.966375031,0.967115881,0.967843225,0.968557237,0.969258091,0.969945961,0.97062102],
  "1.9":[0.97128344,0.971933393,0.97257105,0.973196581,0.973810155,0.97441194,0.975002105,0.975580815,0.976148236,0.976704532],
  "2.0":[0.977249868,0.977784406,0.978308306,0.97882173,0.979324837,0.979817785,0.98030073,0.980773828,0.981237234,0.9816911],
  "2.1":[0.982135579,0.982570822,0.982996977,0.983414193,0.983822617,0.984222393,0.984613665,0.984996577,0.985371269,0.985737882],
  "2.2":[0.986096552,0.986447419,0.986790616,0.987126279,0.987454539,0.987775527,0.988089375,0.988396208,0.988696156,0.988989342],
  "2.3":[0.98927589,0.989555923,0.989829561,0.990096924,0.99035813,0.990613294,0.990862532,0.991105957,0.991343681,0.991575814],
  "2.4":[0.991802464,0.99202374,0.992239746,0.992450589,0.992656369,0.992857189,0.993053149,0.993244347,0.993430881,0.993612845],
  "2.5":[0.993790335,0.993963442,0.994132258,0.994296874,0.994457377,0.994613854,0.994766392,0.994915074,0.995059984,0.995201203],
  "2.6":[0.995338812,0.995472889,0.995603512,0.995730757,0.995854699,0.995975411,0.996092967,0.996207438,0.996318892,0.996427399],
  "2.7":[0.996533026,0.99663584,0.996735904,0.996833284,0.996928041,0.997020237,0.997109932,0.997197185,0.997282055,0.997364598],
  "2.8":[0.99744487,0.997522925,0.997598818,0.9976726,0.997744323,0.997814039,0.997881795,0.997947641,0.998011624,0.998073791],
  "2.9":[0.998134187,0.998192856,0.998249843,0.99830519,0.998358939,0.99841113,0.998461805,0.998511001,0.998558758,0.998605113],
  "3.0":[0.998650102,0.998693762,0.998736127,0.998777231,0.998817109,0.998855793,0.998893315,0.998929706,0.998964997,0.998999218],
  "3.1":[0.999032397,0.999064563,0.999095745,0.999125968,0.999155261,0.999183648,0.999211154,0.999237805,0.999263625,0.999288636],
  "3.2":[0.999312862,0.999336325,0.999359047,0.999381049,0.999402352,0.999422975,0.999442939,0.999462263,0.999480965,0.999499063],
  "3.3":[0.999516576,0.99953352,0.999549913,0.99956577,0.999581108,0.999595942,0.999610288,0.999624159,0.999637571,0.999650537],
  "3.4":[0.999663071,0.999675186,0.999686894,0.999698209,0.999709143,0.999719707,0.999729912,0.999739771,0.999749293,0.99975849],
  "3.5":[0.999767371,0.999775947,0.999784227,0.99979222,0.999799936,0.999807384,0.999814573,0.999821509,0.999828203,0.999834661],
  "3.6":[0.999840891,0.999846901,0.999852698,0.999858289,0.999863681,0.99986888,0.999873892,0.999878725,0.999883383,0.999887873],
};
const LEFT_TAIL_KEYS=[
  "-0.0",
  "-0.1",
  "-0.2",
  "-0.3",
  "-0.4",
  "-0.5",
  "-0.6",
  "-0.7",
  "-0.8",
  "-0.9",
  "-1.0",
  "-1.1",
  "-1.2",
  "-1.3",
  "-1.4",
  "-1.5",
  "-1.6",
  "-1.7",
  "-1.8",
  "-1.9",
  "-2.0",
  "-2.1",
  "-2.2",
  "-2.3",
  "-2.4",
  "-2.5",
  "-2.6",
  "-2.7",
  "-2.8",
  "-2.9",
  "-3.0",
  "-3.1",
  "-3.2",
  "-3.3",
  "-3.4",
  "-3.5",
  "-3.6",
];
const RIGHT_TAIL_KEYS=[
  "0.0",
  "0.1",
  "0.2",
  "0.3",
  "0.4",
  "0.5",
  "0.6",
  "0.7",
  "0.8",
  "0.9",
  "1.0",
  "1.1",
  "1.2",
  "1.3",
  "1.4",
  "1.5",
  "1.6",
  "1.7",
  "1.8",
  "1.9",
  "2.0",
  "2.1",
  "2.2",
  "2.3",
  "2.4",
  "2.5",
  "2.6",
  "2.7",
  "2.8",
  "2.9",
  "3.0",
  "3.1",
  "3.2",
  "3.3",
  "3.4",
  "3.5",
  "3.6",
];

const PERCENTILE_TABLE={
  '100':3.69,
  '95':1.64,
  '90':1.32,
  '80':.84,
  '70':.52,
  '60':.26,
  '50':0,
  '40':-.25,
  '30':-.52,
  '20':-.84,
  '10':-1.32,
  '5':-1.64,
  '0':-3.69,
};
const SUFFIX_MAP={
  "0":'th',
  "1":'st',
  "2":'nd',
  "3":'rd',
  "4":'th',
  "5":'th',
  "6":'th',
  "7":'th',
  "8":"th",
  "9":"th",
};

export function getPercentileFromZScore(zScore){
  if(Number.isNaN(zScore)){
      return 0
  }

  let zScoreBase;
  let zScoreDecimal;
  let percent;

  if(zScore===0||Math.abs(zScore)<0.00001) {
    return 50;
  }else if(zScore>3.6){
    return 100
  }else if(zScore<-3.6){
    return 0
  }else{
    //Just slice the string to get the basis since you know its between -3.7 & 3.7
    //+:(X.XXXXXXX)
    //-:(-X.XXX)
    if(zScore>0){
      zScoreBase=String(zScore).slice(0,3);
      zScoreDecimal=Number.parseInt(String(zScore).slice(3,4));
    }else{
      zScoreBase=String(zScore).slice(0,4);
      zScoreDecimal=Number.parseInt(String(zScore).slice(4,5));
    }

    //If you passed in a number, then add .0 to it
    if(!zScoreBase.includes(".")){
      zScoreBase=String(zScoreBase+".0");
    }

    //If you passed in a number, add a trailing 3rd decimal
    if(Number.isNaN(zScoreDecimal)){
      zScoreDecimal=0
    }

    percent=ZTABLE[zScoreBase][zScoreDecimal]*100;
  }

  return percent
}

//Simple function to get the value from a percentile, with a corresponding mean and std dev
//Z = x-u/stdDev --> X = Z*stdDev+u
export function getValueFromPercentile(percentile,mean,stdDev){
  //The point here is you need to find the row + col index of the percentage value, so you can multiply the ZValue*stdDev+mean to get the value;
  //The ZValue has two parts -- the base values (#.#) and the '10's place decimal (0.0#);

  //We compose the zValue in two steps: First we split the top half from the bottom half to speed up the search
  //Then we find the row
  //Then once we find the row, we find the column index to look up the '10's place decimal to add to the base zValue for that row.

  try{
    if(PERCENTILE_TABLE[String(Number.parseFloat(percentile))]!==undefined){
      let zValue = PERCENTILE_TABLE[String(Number.parseFloat(percentile))];
      let value = zValue*stdDev+mean;

      return value;
    }else{
      //Search the table for the row and column index that allows you to build a ZValue from the base (ZTABLE Key's) + zValueDecimal
      //*) Initialize
      //1) Start with splitting the table to optimze search since the vast majority of the values for normal distributions are likely near the 40-60th percentiles, so searches should be fastest for those percentiles vs. 90-99th and 0-10th range
      //2) Find the row
      //3) Find the column Index

      //Convert the percentage (%%.%%) into a decimal to use with the table (0.%%%%)
      let decimalPercentile=Number.parseFloat(percentile)/100;

      //Initialize and nullify the component pieces of the zValues;
      let zBase=null;
      let zDecimal=null;
      let zValue=null;

      //Define the ranges of the table
      let minDecimalPercentage=0.000159109;
      let maxDecimalPercentage=0.999887873;

      //I) If the percentile is off the table
      if(decimalPercentile<minDecimalPercentage){
        zValue=-3.69;
      }
      if(decimalPercentile>maxDecimalPercentage){
        zValue=3.69;
      }

      //2) Find the row and Cell
      //**Perf optimization assumption here is that 'the highest volumes (e.g. 80% of entries are going to be 'near the mean' which means you should find validate those entries in the fastest time possible (e.g. O(a) is fastest for 'entries near and around 50th%'))'
      let validKeys;

      //IIa) If the percentile is in the top half of the table (left tail)
      if(decimalPercentile>=minDecimalPercentage&&decimalPercentile<0.50){
        //Start from the middle, and work 'out towards the left tail'
        validKeys=LEFT_TAIL_KEYS;

        let zTableRow=null;

        //Scan the valid keys to find the key associated with the ZTABLE row the decimalPercentile belongs to, and update the zBase value;
        //This tail goes from '50-0' (flip signs of comparitors (</>) to define 'between' for each side of the table);
        validKeys.forEach((key,keyIndex)=>{
          if(zBase===null){
            if(keyIndex<validKeys.length-1 && decimalPercentile<=ZTABLE[key][0] && decimalPercentile>ZTABLE[validKeys[keyIndex+1]][0]){
              //Update the active row if the percentile is between this row's min value and the min value of the next row
              zBase=Number.parseFloat(key);
              zTableRow=ZTABLE[key];
            }else if(keyIndex===validKeys.length-1){
              //Otherwise its the last row so it must be this row if its in the table
              zBase=Number.parseFloat(key);
              zTableRow=ZTABLE[key];
            }
          }
        });

        //Update the decimal for the row
        zTableRow.forEach((entry,index)=>{
          if(index<zTableRow.length-1 && decimalPercentile<=zTableRow[index] && decimalPercentile>zTableRow[index+1]){
            //If the percentile, converted to a decimal (0.%%%%%%) is 'bigger than the cell value and less than the cell value to the right of it', then add the decimal from that column Index to the zValue (0.0#)
            zDecimal=-ZTABLE["Z-DECIMAL"][index];
          }else if(index===zTableRow.length-1&&zDecimal===null){
            //If no decimal is found, then set the decimal = 9 since its the only remaining spot in this half of the table;
            zDecimal=-ZTABLE["Z-DECIMAL"][zTableRow.length-1];
          }
        });

        //Update the zValue
        zValue=zBase+zDecimal;
      }

      //IIb) If the percentile is in the bottom half of the table (right tail)
      if(decimalPercentile>=0.50 && decimalPercentile<=maxDecimalPercentage){
        //Start from the middle and work 'out towards the right tail edge'
        validKeys=RIGHT_TAIL_KEYS;

        let zTableRow=null;

        //Scan the valid keys to find the key associated with the ZTABLE row the decimalPercentile belongs to, and update the zBase value;
        //This Tail goes from '50-100' (flip signs of comparitors (</>) to define 'between' for each side of the table);
        validKeys.forEach((key,keyIndex)=>{
          if(zBase===null){
            if(keyIndex<validKeys.length-1 && decimalPercentile>=ZTABLE[key][0] && decimalPercentile<ZTABLE[validKeys[keyIndex+1]][0]){
              //Update the active row if the percentile is between this row's min value and the min value of the next row
              zBase=Number.parseFloat(key);
              zTableRow=ZTABLE[key];
            }else if(keyIndex===validKeys.length-1){
              //Otherwise its the last row so it must be this row if its in the table
              zBase=Number.parseFloat(key);
              zTableRow=ZTABLE[key];
            }
          }
        });

        //Update the decimal for the row
        zTableRow.forEach((entry,index)=>{
          if(index<zTableRow.length-1 && decimalPercentile>=zTableRow[index] && decimalPercentile<zTableRow[index+1]){
            //If the percentile, converted to a decimal (0.%%%%%%) is 'bigger than the cell value and less than the cell value to the right of it', then add the decimal from that column Index to the zValue (0.0#)
            zDecimal=ZTABLE["Z-DECIMAL"][index];
          }else if(index===zTableRow.length-1&&zDecimal===null){
            //If no decimal is found, then set the decimal = 9 since its the only remaining spot in this half of the table;
            zDecimal=ZTABLE["Z-DECIMAL"][zTableRow.length-1];
          }
        });

        //Update the zValue
        zValue=zBase+zDecimal;
      }

      //Calculate the value from the stats, and return the value
      let value = zValue*stdDev+mean;

      //For Logging / debug
      //console.log({percentile:percentile, decimalPercentile:decimalPercentile, validKeys:validKeys, zBase:zBase, zDecimal:zDecimal, zValue:zValue, value:value});
      return value;
    }
  }catch(err){
    return 0;
  }
}

//Get a plain text label for the given percentile
export function getLabelForPercentile(percentile){
  let percentileLabel;
  let suffix='th';

  //If its the 100th or 0th dont include a decimal
  if(percentile===100){
    percentileLabel="100";
  }else if(percentile===0){
    percentileLabel='0';
  }else{
    percentileLabel=String(percentile.toLocaleString('en-US',{minimumFractionDigits:1, maximumFractionDigits:1}));
    let lastDigit=percentileLabel.charAt(percentileLabel.length-1)==='0'?percentileLabel.charAt(percentileLabel.length-3):percentileLabel.charAt(percentileLabel.length-1);
    suffix=SUFFIX_MAP[String(lastDigit)];
  }


  return String(percentileLabel+suffix);
}

//Create an exponential distribution of bin probabilities
export function generateExponentialDistribution(nBins){

let bins=nBins?nBins:50;
let base=1.1;

let array=Array(bins).fill(1);
console.log(array);

//base*bins+(base**POWER_SERIES(Bins-1))=100;

let target=(100)/base;

let minGuess=0;
let maxGuess=10;
let guess=2;

//Binary Search to converge on the right answer in constant time
for(let i=0; i<50; i++){

  let remainder=Array(bins).fill(guess).reduceRight((agg,cum,index)=>agg+Math.pow(cum,index),0);
  console.log({status:"Remainder Evaluated", target:target, remainder:remainder, case:remainder>target?"OVER":"UNDER", minGuess:minGuess, maxGuess:maxGuess, guess:guess});

  if(remainder>target){
    maxGuess=guess;
    guess=minGuess+(guess-minGuess)/2;
  }else if(remainder<target){
    minGuess=guess;
    guess=guess+(maxGuess-minGuess)/2;
  }else{
    //Do nothing you found the right answer
  }
}

let answer=Array(bins).fill(base).map((entry,index)=>{let value=entry*Math.pow(guess,index); return value;});

console.log({status:"Our Answer", guess:guess, answer:answer, aggregate:answer.reduceRight((agg,cum)=>agg+cum,0)});

return answer;
}