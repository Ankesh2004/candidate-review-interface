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

    useEffect(() => {
        const fetchData = async () => {
            try{
            const assignmentResponse = await getAssignmentData();
            console.log('Assignment Data', assignmentData);
            setAssignmentData(assignmentResponse?.data || []);

            const submissionResponse = await getSubmissionData(status);
            console.log('Submission Response', submissionResponse);
            setSubmissionData(submissionResponse?.data || []);
            }
            catch(error){
                console.log('Error while fetching assignment or submission data', error);
            }
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
                <AssignmentCard assignmentData={assignmentData} submissionsData={submissionData}/>
            </div>
        </div>
    );
};

export default Dashboard;
