var parameters = {present_subdivisions:[],sum_beats:0,subdivision_density:[]};

function calcPrimarySubdivision(hold){
	for(i=0;i<parameters.present_subdivisions.length;i++){
		for(j=0;j<(parameters.sum_beats/(parameters.present_subdivisions[i]/parameters.present_subdivisions[parameters.present_subdivisions.length-1]));j++){
			var beat = checkForBeat(j*(parameters.present_subdivisions[i]/parameters.present_subdivisions[parameters.present_subdivisions.length-1]));
			if(beat){
				if(typeof parameters.subdivision_density[j]!== "number"){
					parameters.subdivision_density[j]=0;
				}
				parameters.subdivision_density[j]++;
			}

		}
	}
}

function checkForBeat(value){

	//if()
}