import React,{use, useEffect,useState} from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import AssignmentCard from '@/components/Assignment/AssignmentCard';
import { getAssignmentData, getSubmissionData, getUserScoreData } from 'services/apis';

const Dashboard = () => {
    const [assignmentData, setAssignmentData] = useState<any[]>([])
    const [submissionData, setSubmissionData] = useState<any[]>([])
    const [status, setStatus] = useState<string>('review');
    const [currentUserData, setCurrentUserData] = useState<any>({});
    const fetchAssignmentData = async() => {
        try{
            const response = await getAssignmentData();
            setAssignmentData(response?.data || []);
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
            fetchAssignmentData();
            fetchSubmissionData(status);
        }; 
        fetchData();
    }, []);
    return (
        <div className='bg-background flex w-[100vw] h-[100vh]'>
            <Sidebar />
            <Footer />
            {/* Main Board Section  */}
            <div className='p-[1rem] w-[100%]'>
                <Navbar data={assignmentData}/>
                <AssignmentCard assignmentData={assignmentData} submissionsData={submissionData} handleStatusChange={handleStatusChange} status={status}/>
            </div>
        </div>
    );
};

export default Dashboard;
