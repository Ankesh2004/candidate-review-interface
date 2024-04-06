import React,{use, useEffect,useState} from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AssignmentCard from '@/components/Assignment/AssignmentCard';
import UserData from '@/components/UserData/UserData';
import { getAssignmentData, getSubmissionData, getUserScoreData } from 'services/apis';

const Dashboard = () => {
    const [assignmentData, setAssignmentData] = useState<any>({})
    const [submissionData, setSubmissionData] = useState<any[]>([])
    const [status, setStatus] = useState<string>('review');
    const [user_id, setUserId] = useState<string>('');
    const [currentUserData, setCurrentUserData] = useState<any>({});
    const fetchAssignmentData = async() => {
        try{
            const response = await getAssignmentData();
            setAssignmentData(response?.data || []);
            console.log(response)
        }
        catch(error){
            console.log('Error while fetching assignment data', error);
        }
    }
    const fetchSubmissionData = async(status:string) => {
        try{
            const response = await getSubmissionData(status);
            setSubmissionData(response?.data || []);
        }
        catch(error){
            console.log('Error while fetching submission data', error);
        }
    }
    const fetchUserScoreData = async(assignmentId:string,user_id:string) => {
        try{
            const response = await getUserScoreData(assignmentId,user_id);
            setCurrentUserData(response?.data || {});
            console.log("Current user data",response?.data);
        }
        catch(error){
            console.log('Error while fetching user score data', error);
        }
    }
    const handleStatusChange = () => {
        if(status === 'review'){
            setStatus('shortlisted')
        }
        else{
            setStatus('review')
        }
        fetchSubmissionData(status);
    };
    

    useEffect(() => {
        const fetchData = async () => {
            await fetchAssignmentData();
            await fetchSubmissionData(status);
            setUserId(submissionData[0]?.id || '1') 
            console.log("user id",user_id);  
            console.log("assignment id",assignmentData?.id); 
            fetchUserScoreData(assignmentData?.id || '',user_id); 
        }; 
        fetchData();
    }, []);
    return (
        <div className='bg-background flex w-[100vw] h-[100vh]'>
            <Sidebar />
            <Footer />
            {/* Main Board Section  */}
            <div className='p-[1rem] w-[100%] flex flex-col'>
                <Navbar data={assignmentData}/>
                <div className='w-[100%] flex flex-row gap-[1rem]'>
                    <AssignmentCard assignmentData={assignmentData} submissionsData={submissionData} handleStatusChange={handleStatusChange} status={status}/>
                    <UserData data={currentUserData}/>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;
