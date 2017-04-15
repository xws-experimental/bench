const ROCKIMG="png/asteroid3.jpeg";
const DEBRISIMG="png/debris.png";

var OBSTACLES=[];
var PX=[300,500,300,500,300,500];
var PY=[250,250,400,400,550,550];
var id=0;
const MAXROCKS=20;
var MOVING_ASTER=false;
const ROCKS=[
"m 104,7.69 c 23.68645,6.788715 36.31832,32.149873 60.26972,38.343289 22.5828,-0.437523 44.66378,16.533927 47.0145,39.571574 1.7824,16.350067 17.58775,28.375637 19.42957,45.557037 4.62232,16.14295 -3.063,34.92477 -18.79084,41.60093 -19.22063,12.27219 -23.97348,36.29633 -26.3595,57.32031 -11.7719,24.5963 -39.77913,35.95058 -65.41883,39.06789 -22.440402,-6.18345 -41.283826,10.88352 -61.241176,17.63584 -16.76045,5.45152 -33.113233,-7.47894 -38.530882,-22.80759 C 17.176622,247.87625 8.1464261,234.3236 4.0567839,218.40819 -1.7438181,195.92883 0.63774097,172.45364 4.606828,149.91669 6.1331829,124.03728 -5.926177,97.8685 3.3319943,72.406886 13.558278,40.415571 42.544211,19.463551 70.611984,3.7855478 81.374827,-1.0770344 94.740584,0.18536967 104,7.69 Z",
"m 74,7.61 c 7.753759,10.858255 23.659647,10.35574 34.20385,4.142701 9.03128,-4.0534436 19.21494,-1.9401962 28.52161,-5.0910648 10.92015,-2.154159 21.76622,-6.83507944 32.99101,-6.11838415 11.23296,2.00017155 13.66436,15.68926995 8.03436,24.21865495 -4.25358,10.809597 -16.56604,13.981888 -22.0997,23.735597 -7.53509,10.764739 -16.34633,24.503225 -31.127,24.468428 C 106.27572,72.548533 92.950913,91.727866 74.194294,88.144844 53.667818,82.293086 47.847944,55.910483 26.797923,50.69776 17.185894,50.719378 7.3060035,46.218346 3.1175923,37.113415 -2.8694247,26.930094 1.5394187,12.37286 13.030969,8.3968377 31.259956,1.4461437 53.349301,-4.6053888 71.463354,5.9051033 L 72.744026,6.7252875 74,7.61 Z",
"m 138.53,10.01 c 5.40626,19.802152 28.87853,18.911256 43.83272,26.459905 11.82989,11.386765 31.17305,17.630966 36.42803,33.950779 2.76543,19.624152 -17.99639,27.262955 -31.52942,35.447526 -20.56062,12.50938 -15.67798,41.22927 -31.85977,56.80308 -24.38514,18.96463 -57.192913,8.68832 -83.266997,-0.73605 C 52.576398,152.8614 28.041486,160.65945 11.190678,145.71557 -10.095375,129.9042 5.6556381,104.78632 23.486247,94.500663 41.288608,78.919071 45.241114,53.068768 63.439939,37.518779 81.853911,28.422426 88.100324,1.9971094 110.1991,-0.04794856 120.29646,0.14465668 131.88206,1.3566358 138.53,10.01 Z",
"m 72,0.6 c 14.992071,11.950867 27.356734,30.835777 49.0539,29.052927 22.54799,4.831198 11.23093,26.179505 10.66804,40.712681 1.29041,14.474071 22.7749,29.284722 9.00205,42.809722 -13.17549,7.38011 -25.84477,-13.04589 -39.91957,-2.56419 -15.021143,8.78534 -32.001234,23.92033 -50.515361,15.66927 C 35.997216,113.15938 16.127851,106.79857 2.1855691,94.383884 -1.9388697,76.898501 4.7466217,58.441952 0.18438048,40.73882 5.806309,19.339462 29.633649,12.251672 47.490222,3.9936009 55.293323,1.1777068 63.69706,-0.47426763 72,0.6 Z",
"m 92,3.55 c 13.35095,8.210786 30.00977,12.329972 45.29538,7.505902 14.45246,-1.6753573 32.50637,7.379137 33.3896,23.277674 -1.16698,9.619667 0.66069,19.077557 3.44222,28.233278 2.93882,9.916384 -2.53869,19.612559 -10.66892,25.090369 -8.67744,6.76962 -19.58996,11.562362 -25.09186,21.625407 C 122.19669,126.15279 96.416289,137.714 73.363004,129.22379 55.525476,120.88068 36.083637,114.55994 21.716964,100.47179 9.4202131,92.882312 -3.2620408,80.742356 -0.20756142,64.830795 2.5853742,21.920143 51.014336,-12.142371 92,3.55 Z",
"m 88,2.74 c 14.89109,15.864469 2.110781,42.020731 18.2397,57.227029 14.57912,9.438869 32.69928,18.10007 37.81781,36.219188 2.33267,12.551883 -4.98332,24.138463 -6.42804,36.406793 -5.71592,28.56302 -10.66403,58.58523 -28.18426,82.73461 C 98.325691,232.46357 84.01503,250.5467 63.256996,255.54156 49.213713,255.38464 40.958093,241.00245 40.126977,228.3937 37.959362,214.06608 35.463141,199.2234 26.80698,187.16906 15.184733,168.07566 -0.3727357,148.86285 0.4410242,125.2403 -0.82700464,113.95211 0.519549,101.14315 10.224845,93.729596 20.701913,83.99428 34.545443,79.406559 46.583369,72.066911 53.792512,51.74081 50.415478,26.382572 67.670781,10.611651 73.195023,5.947624 80.084933,-1.5559468 88,2.74 Z",
"m 70,4.85 c 42.89941,11.006942 88.6401,43.28005 90.08216,91.521071 4.22874,32.066519 -25.2289,52.095309 -32.77045,79.371239 3.64366,27.24689 -21.21346,30.54811 -41.778085,30.6541 -21.372431,4.1684 -46.503427,26.35806 -65.567673,4.77976 C 3.3962995,181.86073 43.409531,166.1283 54.968858,144.61803 66.594281,121.17951 24.886107,110.63839 36.541486,85.749591 36.788718,57.106427 1.9022922,43.643872 0.13121547,16.51475 11.628065,-9.165748 48.972608,0.09541228 70,4.85 Z",
"m 96,7.07 c 22.21936,-1.2748503 43.42137,10.625131 53.9089,30.272432 8.69197,19.332889 29.14037,36.901754 25.83445,59.413289 -7.95029,18.940209 -35.1644,24.545899 -28.70496,50.351999 -1.28406,21.10408 -27.33498,25.04775 -44.12503,26.41517 C 70.449544,167.8654 53.977736,135.08707 36.549008,110.65576 24.184423,92.2867 -4.119229,80.15006 -0.04494536,54.336438 2.2215288,30.459903 28.930966,27.401092 43.204026,13.183848 57.854593,-1.7401486 77.888088,-2.5989637 96,7.07 Z",
"m 22.83,10.14 c 36.381764,-7.5182231 75.332367,38.705706 106.91598,1.085856 31.19487,-26.154371 64.93771,4.569675 55.83452,40.417752 1.71024,59.468512 22.98507,123.885752 -7.35227,179.631272 -25.41621,20.31663 -58.99436,-0.0606 -86.820718,-3.84368 C 51.742324,218.90308 20.026502,183.63753 28.77643,141.9493 30.362924,107.69434 -3.8628827,84.245955 1.6335787,49.436507 3.2882936,34.68249 8.8431709,17.52641 22.83,10.14 Z",
"m 73.35,7.1 c 0.742924,12.833017 9.807449,30.172841 25.048008,26.528143 12.599832,-3.585974 26.310422,0.221493 34.295202,10.888176 7.73658,9.139649 12.54536,20.89596 23.4449,27.005137 11.57532,7.821056 24.58954,16.721939 27.19873,31.558114 5.2342,14.71903 7.51038,37.09103 -9.77698,44.67607 -13.80015,7.13307 -29.14257,-1.25293 -43.31614,3.72193 -15.15132,5.75741 -29.03507,-4.44612 -42.634543,-9.54349 -12.876028,-7.03738 -23.708035,3.30735 -33.940389,9.99189 -10.952691,7.628 -28.068654,3.85643 -32.543364,-9.34957 C 17.241811,131.38836 19.162764,117.59989 9.6636371,108.86755 0.15964236,94.112038 1.7097107,75.919244 1.8103437,59.24479 -0.3116275,44.692966 -3.0568617,24.567133 12.428846,16.257076 26.141799,8.6801814 39.824977,-3.1474859 56.644493,-0.08206564 62.578526,1.0293171 69.0122,2.5858262 73.35,7.1 Z",
"m 102,0.21 c 23.61326,-4.7742217 51.16121,11.73593 53.54307,36.69987 21.13119,18.005513 53.25206,4.662235 74.55944,23.311004 22.65735,16.804037 21.00815,47.485046 21.62736,72.671856 0.43306,30.01726 26.25312,58.22 12.89012,88.29914 -18.75656,25.83353 -53.60122,25.96862 -81.62681,34.04374 C 135.5408,265.27781 81.577228,270.66209 38.232192,244.33067 6.9293937,226.26954 -10.189513,184.12625 6.784637,150.71849 17.122164,118.96541 34.809642,84.588051 21.694586,50.963708 14.927939,28.153412 35.951375,8.3332141 57.118388,5.0589238 71.860142,2.3204637 86.957794,-0.28888751 102,0.21 Z",
"m 89.32,24.66 c 7.9625,5.588282 18.11069,11.432752 19.47608,22.040464 0.0713,11.380458 -5.26314,22.564982 -12.989602,30.768455 -7.782536,8.131695 -21.20007,14.120957 -31.758821,7.709676 C 57.730916,81.320978 51.834067,76.247376 44.226347,75.243966 32.970122,71.801274 22.789116,63.602609 18.590866,52.405008 13.675682,45.204443 1.8028657,40.50528 4.1280348,30.087205 6.0641439,21.282435 15.670301,17.787489 23.781595,18.047675 32.363214,18.899333 39.762362,14.27495 47.323866,11.057853 54.036138,10.011348 60.080345,6.7869695 66.94239,6.5239514 73.827745,6.2832858 79.992573,10.600531 83.027632,16.625433 84.923397,19.450903 86.872053,22.276379 89.32,24.66 Z"
];

const DEBRISCLOUD=[
"M 304.95954,64.376304 C 277.49277,82.276003 241.66827,69.454477 211.41731,79.85341 182.94785,87.482512 151.97474,94.154867 123.11879,83.943747 95.48938,75.99336 66.651738,70.398968 37.484081,73.398842 18.970572,78.061107 -14.137683,61.027612 8.1795392,44.831273 35.781402,29.89724 66.869667,20.316467 97.592631,11.657888 162.57714,-6.6090419 236.65056,-0.9763699 294.31725,32.566319 c 15.15677,5.196271 26.61381,20.160102 10.64229,31.809985 z",
"m 342.60305,45.386961 c -7.29191,22.348261 -9.66643,46.973239 -30.70022,65.744569 -9.56291,8.46772 -25.11789,12.92218 -40.59786,11.98244 C 220.12739,123.1282 171.21545,103.90824 119.65346,111.45169 79.932518,115.72011 39.481042,104.62899 9.8413502,86.727358 -3.629765,72.850491 5.3001906,54.56609 20.913419,43.453167 39.272225,29.821382 66.622062,19.233063 94.387958,22.827131 144.87655,25.920022 198.72655,22.705697 242.49463,3.6247875 c 38.9784,-6.1384604 84.97751,7.9784805 98.78833,34.5910935 0.92712,2.352947 1.12743,4.748359 1.32009,7.17108 z M 98.348381,22.576575 l 0.55403,-0.173574 -0.55403,0.173574 z m 24.424669,1.147571 0.55403,-0.173574 -0.55403,0.173574 z m 28.00812,0.08717 0.55403,-0.173574 -0.55403,0.173574 z m 22.30992,-1.125739 0.55404,-0.173574 -0.55404,0.173574 z m 2.17138,-0.213036 0.55402,-0.173574 -0.55402,0.173574 z m 0.62445,-0.238469 0.55403,-0.173575 -0.55403,0.173575 z m 1.54695,0.02544 0.55403,-0.173574 -0.55403,0.173574 z m 14.92991,-3.236843 0.55404,-0.173569 -0.55404,0.173569 z m 6.37929,-1.511898 0.55401,-0.173565 -0.55401,0.173565 z M 237.86298,5.344172 238.417,5.1706024 237.86298,5.344172 Z",
"M 8.6920869,121.16887 C -4.1927589,98.966912 0.90898033,72.55157 8.7041909,49.662049 14.372638,35.476035 16.326584,18.502785 30.338869,8.681508 45.825701,-3.4131758 72.656091,-5.7614358 86.844372,9.2566296 97.590533,22.345836 117.873,25.584085 134.01661,19.956304 c 11.08514,-3.247312 20.45186,-9.79416 30.54262,-14.8525666 14.11297,-5.1505053 26.8782,7.2472106 29.23156,19.2600866 4.21484,11.498886 -1.06379,24.192355 6.41451,34.874819 7.62632,15.290163 20.05159,31.543452 14.34819,49.165577 -3.03505,13.5232 -12.4538,26.30757 -27.13751,30.91577 -13.91592,5.06137 -29.79779,3.4131 -43.10475,-2.40379 -17.36813,-4.34952 -33.14526,6.4165 -46.726747,14.86036 -14.840207,9.32885 -35.077152,16.24822 -52.087702,7.44298 -16.955592,-7.9194 -28.150179,-23.00607 -36.8043201,-38.05067 z",
"m 91.923226,127.78997 c 5.513731,11.3981 10.972854,25.51358 4.351499,37.62239 -7.54852,11.28418 -25.767729,9.59278 -33.334473,-0.81802 C 55.622193,157.05053 54.513378,146.07813 49.726705,137.18449 41.653771,125.15429 24.823594,120.63855 20.32487,105.94528 19.390228,97.039845 28.352819,92.306256 34.653598,88.093208 45.592211,81.790657 47.006891,67.243399 43.146197,56.335555 40.153404,45.98415 32.61561,38.046886 25.958609,29.920187 21.014609,18.807726 32.47462,6.8789866 43.555566,7.023595 52.328844,7.0126986 62.046398,10.741411 69.897324,4.9841051 78.99616,-0.10794813 86.373887,-10.091033 97.644393,-9.976946 c 13.469977,1.6211714 21.001927,14.9780158 24.779587,26.68591 4.09484,12.671839 4.09866,26.180141 7.02758,39.110388 1.46634,10.045348 -1.9205,22.178303 -12.13367,26.284736 -14.87769,7.426397 -27.334214,22.427262 -27.509921,39.622562 0.182575,2.25508 -0.171998,4.82307 2.115257,6.06332 z m -4.240826,-5.7236 c -2.796123,0.46537 0.642581,1.50828 0.72337,0.29222 l -0.72337,-0.29222 z",
"m 53.39,17 c 8.857468,18.680274 35.638969,29.655166 53.26768,16.552682 9.4851,-13.02633 29.26144,-21.688691 42.23907,-8.10085 13.3583,12.578881 11.1836,35.187026 -1.51894,47.443912 -9.14919,9.666576 -13.28816,23.915425 -6.58545,36.100486 5.44133,14.24364 14.35173,28.50153 11.97365,44.38173 5.07893,15.66617 -15.68191,32.3177 -29.44475,22.33028 C 110.6022,169.06652 93.829496,166.42587 87.217235,151.92188 78.379044,137.89166 83.963593,119.73027 74.402737,106.12243 65.827752,92.01835 48.203264,82.689295 31.783423,87.523944 18.33036,88.28596 11.389874,73.121866 13.520578,61.502437 15.481591,47.172531 -2.1632982,36.550726 4.0544615,21.982665 9.0812944,2.1611127 40.629477,-6.3421749 51.54838,12.953159 52.291692,14.237963 52.912978,15.594107 53.39,17 Z",
"m 53,28.01 c 17.264267,-0.215909 32.661816,-13.369626 50.21866,-9.082602 7.22749,2.514502 14.01831,10.390153 22.24021,5.672311 11.30763,-5.596745 17.32705,-20.2041726 30.88327,-21.3792418 11.63112,0.9015139 18.09339,12.3581728 24.16953,20.9111348 8.18578,10.112096 3.95736,25.007478 -5.15698,32.980017 -6.99113,8.003235 -17.51071,9.445625 -26.92735,12.360189 -14.16502,8.412284 -13.3072,30.629892 -29.93155,36.224342 -14.8311,-2.26076 -20.970578,-21.014783 -36.475878,-21.444488 -17.53188,0.713857 -29.193332,17.645528 -32.013793,33.593988 -1.961796,8.81551 0.354193,19.03046 -6.246545,26.36422 -5.430599,7.83687 -17.165422,10.68299 -24.881498,4.42654 C 4.9530851,138.95257 4.5896229,118.11427 12.893511,104.63532 19.137393,89.506979 26.037539,72.290072 19.933499,55.997969 17.518418,48.114476 9.4615578,44.674169 5.3905151,37.988065 -0.63100116,29.32318 -1.2186853,14.692506 9.3842495,9.2505971 18.552531,3.804272 28.646946,10.231493 35.097662,16.846668 40.328121,21.512442 45.748065,26.928689 53,28.01 Z",
"m 168.96,92 c -18.50703,19.38046 -3.01703,54.1903 23.95617,52.99453 19.19731,4.43402 27.75181,29.62521 13.24594,43.78213 -13.678,13.91986 -28.60684,33.36373 -50.94777,25.56722 C 132.89847,209.53592 117.2191,188.40609 92.738599,190.39623 73.511926,192.25447 46.474831,188.69238 45.221174,164.12611 47.858658,139.29003 19.45257,136.80785 5.4202307,126.69731 -4.7122326,101.49779 26.120786,90.455869 44.41309,85.144865 71.708322,72.249234 58.921776,45.204494 56.456307,23.773578 65.305726,5.2763567 90.435503,10.848472 106.49066,2.9345145 133.66834,-7.4060996 133.72447,31.035544 147.59229,43.624972 161.10873,55.504323 178.34631,72.281842 168.96,92 Z",
"m 183.99,21 c -5.56101,14.774238 -10.2477,33.563429 0.63641,47.120851 9.17136,8.95922 24.20153,3.674604 33.84782,12.312651 17.7844,11.961888 26.62799,33.887568 27.46098,54.728648 -0.88728,13.54567 -15.82829,20.54396 -28.00934,18.62906 -12.52223,-0.58085 -23.82537,-6.85871 -33.46056,-14.40887 -23.36253,-12.84254 -51.25219,-5.20342 -74.25967,4.51817 -14.904768,6.77899 -30.771017,14.6877 -47.650424,11.46214 C 50.281769,153.28514 41.539746,142.6497 29.150367,140.78095 18.214439,137.6825 4.4568112,135.09631 -0.33046599,123.26948 -2.0525657,107.0685 14.467061,96.197332 28.643924,93.886155 c 19.97782,-4.24195 40.661561,2.422228 60.514619,-2.233597 20.492967,-8.00363 29.015007,-30.475583 35.045477,-49.885401 2.45271,-13.03661 8.61197,-25.547868 19.48849,-33.5363126 9.51432,-8.26542468 25.89966,-12.0039348 35.33904,-1.6198311 C 182.64496,10.400522 184.68305,15.755864 183.99,21 Z",
"m 167,10.03 c 8.61332,11.733364 24.83887,11.186348 37.52164,7.864768 11.43633,-2.298219 24.04442,-5.736899 35.00002,0.08332 12.67268,14.243207 4.59387,35.94259 -7.70045,47.589028 -7.26252,9.015314 -19.05552,9.440288 -28.61213,14.415579 -15.38504,7.593175 -28.19142,23.270189 -46.67795,22.424269 -12.57735,-0.37299 -21.05597,-12.961046 -33.9889,-11.75122 -19.17926,-0.06631 -35.334555,22.20865 -26.387033,40.00049 4.126283,9.2659 17.003503,15.67229 13.998643,27.27996 -6.45663,11.01615 -21.675732,10.64774 -32.92803,11.22868 -10.935349,-0.9392 -16.018548,16.25838 -29.314738,13.65383 -21.53893,0.66305 -36.824707,-22.96858 -31.944453,-42.86518 2.364129,-13.52708 12.077562,-28.58683 3.573383,-41.761378 C 12.106522,91.199521 3.1288265,85.121422 1.7167286,73.903193 -4.6401612,48.365802 12.28966,16.672837 39.900312,13.991916 49.325716,12.840211 57.436875,19.235805 66.624607,20.478449 87.461898,25.968426 111.74653,22.670227 127.35394,6.7895446 138.74069,-3.5031337 156.70439,-0.14037568 167,10.03 Z",
"M 45.017141,207.88249 C 40.489055,195.9527 25.827599,206.13858 21.94712,198.49629 19.632225,187.57903 12.847701,179.62497 6.1210952,172.45416 -2.1013702,162.80832 0.58802524,147.44145 5.4357312,136.54149 10.206078,124.65819 7.3245454,111.15212 7.3158644,98.512143 6.4050751,86.653353 5.8944066,74.363257 2.9866746,63.025517 -3.0945957,50.158376 4.6572881,34.454161 14.459331,28.196862 23.163632,22.64584 33.648155,21.461042 41.110104,13.073868 47.272935,5.5331831 57.13929,-4.6636044 64.819173,6.2087031 c 8.451474,6.9186479 19.730211,8.0459719 26.251344,18.4169699 5.623554,7.368098 10.589753,16.766842 19.405613,18.641368 8.45283,2.011794 11.72519,12.513564 17.96635,18.41878 4.74183,5.325133 10.27373,9.616207 15.91481,13.264365 1.40106,5.623733 0.31403,11.884034 0.65112,17.787681 0,16.944073 0,33.888153 0,50.832233 -10.60566,6.85851 -22.89864,11.25864 -30.94326,22.71309 -3.05232,11.23343 -8.47523,22.82921 -19.248128,23.52228 -13.193897,6.68059 -23.291218,20.29593 -36.864647,25.89708 -5.13592,0.53934 -9.196334,-4.2949 -12.935234,-7.82006 z"
];

function loadrock(s,str) {
    var i,j;
    var coord=[],o,ob;
    id=0;
    if (typeof TEAMS[1].rocks=="undefined"||TEAMS[1].rocks[2]==-1) TEAMS[1].rocks=[0,1,2];
    if (typeof TEAMS[2].rocks=="undefined"||TEAMS[2].rocks[2]==-1) TEAMS[2].rocks=[3,4,5];
    if (str !="") {
	o=str.split(";");
	for (i=0; i<6; i++) {
	    ob=o[i].split(",");
	    coord[i]=[parseInt(ob[0],10),parseInt(ob[1],10),parseInt(ob[2],10)];
	    if (ob.length==4) {
		if (i<3) TEAMS[1].rocks[i]=parseInt(ob[3],10);
		else TEAMS[2].rocks[i-3]=parseInt(ob[3],10);
	    }
	}
    } else for (i=0; i<6; i++) {
	do {
	    var ok=true;
	    coord[i]=[Math.random()*400+200,Math.random()*400+200,Math.random()*45];
	    for (j=0; j<i; j++) {
		var dx=coord[i][0]-coord[j][0]+PX[i]-PX[j];
		var dy=coord[i][0]-coord[j][0]+PY[i]-PY[j];
		if (dx*dx+dy*dy<15000) { ok=false;break; }
	    } 
	} while (!ok);
    }
    for (i=0; i<3; i++) {
	OBSTACLES[i]=new Rock(TEAMS[1].rocks[i],coord[i],1,i);
	OBSTACLES[i+3]=new Rock(TEAMS[2].rocks[i],coord[i+3],2,i);
    }
}
function saverock() {
    if (OBSTACLES.length==0) return "";
    var str=OBSTACLES[0].toASCII();
    for (var i=1; i<6; i++) 
	str+=";"+OBSTACLES[i].toASCII();
    return str;
}

class Rock {
    constructor(frag,coord,team,n) {    
	var k;
	var i=(team-1)*3+n;
	this.o=[];
	this.type=(frag>=MAXROCKS)?DEBRIS:ROCK;
	this.id=frag;
	this.name=(frag>=MAXROCKS?"Debris #":"Asteroid #")+i;
	this.arraypts=[];
	this.dragged=false;
	this.tx=coord[0];
	this.ty=coord[1];
	this.team=team;
	this.alpha=coord[2];
	this.moving=MOVING_ASTER;
	PATTERN = s.image(((frag>=MAXROCKS)?DEBRISIMG:ROCKIMG),0,0,256,256).pattern(0,0,256,256);
	var ASTER=(frag>=MAXROCKS?DEBRISCLOUD:ROCKS);
	this.inside=s.path(ASTER[frag%MAXROCKS]).attr({
	    fill: PATTERN,
	    strokeWidth: 0,
	    stroke: "#888",
	    "class":"ASTEROID"+team,
	});
	//var shadow = s.filter(Snap.filter.shadow(0, 10,15,"#000", 1));
	this.outline=s.path(ASTER[frag%MAXROCKS]).attr({
	    fill:"rgba(0,0,0,0)",
	    //filter:shadow,
	    strokeWidth:2,
	    stroke:"#888"
	});
	this.g=s.group(this.inside,this.outline);
	for (k=0; k<this.outline.getTotalLength(); k+=5) 
	    this.arraypts.push(this.outline.getPointAtLength(k));
	if (REPLAY.length==0) this.addDrag();

	this.path="";
	this.outlinepts=[];
	this.g.hover(function() { this.outline.attr({strokeWidth:6,stroke:"#F00"});}.bind(this),
		     function()  {this.outline.attr({strokeWidth:2,stroke:"#888"});}.bind(this));
	this.g.addClass("unit");
	var b=this.g.getBBox();
	this.o=[];
	var scale=0.27;
	if (frag>=MAXROCKS) scale=0.4;
	frag=frag%MAXROCKS;
	for (k=1; k<4; k++) {
	    this.o[k]=s.ellipse(b.x+b.width/2,b.y+b.height/2,200/scale/2*k+b.width/2,200/scale/2*k+b.height/2).attr({pointerEvents:"none",display:"none",fill:WHITE,opacity:0.3,strokeWidth:2});
	}

	this.m=(new Snap.Matrix()).translate(coord[0],coord[1]).rotate(coord[2],0,0).scale(scale,scale);
	//this.g.transform('t '+(-b.width/2-b.x)+" "+(-b.height/2-b.y));
	this.getOutlineString();

	//console.log("ROCK called "+i+" "+coord[0]+" "+PX[i]+" "+frag);
	this.g.transform(this.m);
	this.g.appendTo(VIEWPORT);

	this.show();
    };

    addDrag() {
	this.g.drag(this.dragmove.bind(this), 
		    this.dragstart.bind(this),
		    this.dragstop.bind(this));
    };
    unDrag() {
	this.g.undrag();
    };
    getBall() {
	var b=this.g.getBBox();
	return {x:b.x+b.width/2,y:b.y+b.height/2,diam:Math.max(b.width/2,b.height/2)};
    };
    toASCII() {
	return Math.floor(this.tx)+","+Math.floor(this.ty)+","+Math.floor(this.alpha)+","+this.id;
    };
    getrangeallunits() { return Unit.prototype.getrangeallunits.call(this);};
    getrange(sh) { return Unit.prototype.getrange.call(this,sh); };
    gethitrangeallunits() {return [[],[],[],[]];};
    togglehitsector() {};
    togglerange() { };
    getOutlinePoints() {
	var k;
	this.outlinepts=[];
	for (k=0; k<this.arraypts.length; k+=5) {
	    var p={x:this.arraypts[k].x,y:this.arraypts[k].y};
	    this.outlinepts.push(transformPoint(this.m,p));
	}
	return this.outlinepts;
    };
    getBox() { };
    getOutline() {
	var out= s.path(this.path); 
	out.appendTo(s);
	return out;
    };
    getOutlineString() {
	var k;
	var pts=[];
	this.getOutlinePoints();
	this.path="M ";
	for (k=0; k<this.outlinepts.length; k++) {
	    var p=this.outlinepts[k];
	    this.path+=p.x+" "+p.y+" ";
	    if (k==0) this.path+="L ";
	}
	this.path+="Z";
	// For debugging obstacle positioning/collision
	//s.path(this.path).attr({fill:WHITE,opacity:0.5,class:"possible"});
	return {s:this.path,p:this.outlinepts};
    };
    turn(n) {
	this.m.add(MR(n,0,0));
	this.alpha+=n;
	this.show();
    };
    unselect() {
    };
    select() { 
	if (phase==SETUP_PHASE) {
	    var old=activeunit;
	    activeunit=this;
	    old.unselect();
	    this.showpanel();
	}
    };
    showpanel() { 
	Unit.prototype.showpanel.call(this); 
	$("#positiondial button").show();
    };
    dragmove(dx,dy,x,y) { Unit.prototype.dragmove.call(this,dx,dy,x,y); };
    dragstart(x,y,a) {
	var old=activeunit;
	old.unselect();
	activeunit=this;
	Unit.prototype.dragstart.call(this,x,y,a);
	Unit.prototype.showpanel.call(this);
	$("#positiondial button").show();
	this.dragshow(); 
    };
    dragshow() {
	for (var k=1; k<4; k++) 
	    this.o[k].transform(this.dragMatrix).attr({display:"block"}).appendTo(VIEWPORT);
	this.g.transform(this.dragMatrix);
	//this.g.appendTo(VIEWPORT);
    };
    showhitsector() {};
    dragstop(a) { 
	for (var k=1; k<4; k++) 
	    this.o[k].attr({display:"none"});
	Unit.prototype.dragstop.call(this,a);
    };
    endphase() {
	if (this.moving) {
	    var path=P["F4"].path;
	    var len=path.getTotalLength();
	    var m0=this.m;
	    var m;
	    Snap.animate(0,len,function(value) {
		m=Unit.prototype.getmatrixwithmove(m0,path,value);
		this.g.transform(m);
	    }.bind(this),TIMEANIM*len/200,mina.linear,function() {
		this.m=Unit.prototype.getmatrixwithmove(m0,path,len);
		this.g.transform(this.m);
	    }.bind(this));
	}
    };
    show() {
	this.g.transform(this.m);
	//this.g.appendTo(VIEWPORT);
    };
    setclickhandler(f) {
	this.g.unmousedown();
	this.g.mousedown(f);
    };
    setdefaultclickhandler() {
	this.g.unmousedown();
	this.g.mousedown(function() { this.select();}.bind(this));
    };
    selectrocks() {
	$(".aster").empty();
	var sa=Snap(".aster");
	var g=[];
	var rocks=TEAMS[this.team].rocks;
	var viewport=sa.g();
	var k=0;
	var s;
	var m1;
	var hh=0,kk=0;
	var self=this;
	var myid=rocks.indexOf(this.id);
	var coord=[this.tx,this.ty,this.alpha];
	var padebris = sa.image(DEBRISIMG,0,0,256,256).pattern(0,0,256,256);
	var parock = sa.image(ROCKIMG,0,0,256,256).pattern(0,0,256,256);
	var myob=OBSTACLES.indexOf(this);
	for (var i=0; i<ROCKS.length+DEBRISCLOUD.length; i++) {
	    //if (rocks.indexOf(i)>-1) continue;
	    if (i<ROCKS.length) {
		s=0.27;
		g[k]=sa.path(ROCKS[i]).attr({strokeWidth:3});
		g[k].attr({fill:parock,stroke:"#a00",id:"aster"+i,idk:k}).click(function() {
		    var n=parseInt(this.attr("id").match(/\d+/)[0],10);
		    var m = myid;
		    rocks[myid]=n;
		    OBSTACLES[myob].g.remove();
		    OBSTACLES[myob]=new Rock(n,coord,self.team,m);
		    console.log("change for rock "+this.attr("id")+" "+coord[0]+" "+coord[1]+" "+coord[2]);
		    activeunit=OBSTACLES[myob];

		    window.location="#";
		}).hover(function()  {g[parseInt(this.attr("idk"),10)].attr({fill:"#a00"});},
			 function()  {g[parseInt(this.attr("idk"),10)].attr({fill:parock});});
	    } else {
		s=0.4;
		g[k]=sa.path(DEBRISCLOUD[i-ROCKS.length]).attr({strokeWidth:3})
		g[k].attr({fill:padebris,stroke:"#a00",id:"deb"+(i-ROCKS.length),idk:k}).click(function() {
		    //console.log("MAXROCKS:"+MAXROCKS+" "+ROCKS.length);
		    var n=parseInt(this.attr("id").match(/\d+/)[0],10)+MAXROCKS;
		    var m = myid;
		    rocks[myid]=n;
		    OBSTACLES[myob].g.remove();
		    OBSTACLES[myob]=new Rock(n,coord,self.team,m);
		    console.log("change for debris "+this.attr("id")+" "+i);
		    activeunit=OBSTACLES[myob];
		    window.location="#";
		}).hover(function()  {g[parseInt(this.attr("idk"),10)].attr({fill:"#a00"});},
			 function()  {g[parseInt(this.attr("idk"),10)].attr({fill:padebris});});
	    }
	    var r=0;
	    var m=0;
	    if (k==13||k==12) { r=45; m=-40; }
	    m1=MT(kk*80+10,10+m+hh*80).rotate(r,0,0).scale(s,s);
	    g[k].transform(m1);
	    g[k].appendTo(viewport);
	    k++;
	    kk+=1;
	    if (kk>5) {
		kk=0;
		hh+=1;
	    }
	}
    }
}
