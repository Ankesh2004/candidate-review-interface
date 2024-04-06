import { apiConnector } from "./apiConnector";
const GET_ASSIGNMENT_API = 'https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details';
const GET_SUBMISSION_API = 'https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates';
const GET_USER_SCORE_API = 'https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data'


// TO GET ASSIGNMENT DATA
export const getAssignmentData = async() => {
    try{
        const response = await apiConnector('GET','/assignment_details' );
        return response; 
    }
    catch(error){
        console.log('Error while fetching assignment data', error);
    }
} 
// TO GET USERS SUBMISSIONS DATA
export const getSubmissionData = async(status:string) => {
    try{
        const response =await apiConnector('GET', '/assignment_candidates',{},{},{
            status: status,
            offset:0,
            limit: 4
        });
        console.log("SUb data",response);
        return response;
    }
    catch(error){
        console.log('Error while fetching submission data', error);
    }
}
// TO GET USER SCORE DATA
export const getUserScoreData = async(assignmentId:string,user_id:string) => {
    try{
        // const res = await fetch(GET_USER_SCORE_API, {
        //     method: 'GET',
        //     headers: {
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     assignment_id: assignmentId,
        //     user_id: user_id
        //     })
        // });
        const response = await apiConnector('GET', '/candidate_assignment_data',{},{},{
            assignment_id: assignmentId || 'assignment123',
            user_id: user_id || '1'
        });
        return response;
    }
    catch(error){
        console.log('Error while fetching user score data', error);
    }
}

// {
//     'Access-Control-Allow-Origin': 'http://localhost:3000/',
// }