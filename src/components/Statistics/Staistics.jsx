import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Staistics = () => {
    const data = [
        {
            "id": 1,
            "assignmentNo": 1,
            "marks": 50
        },
        {
            "id": 2,
            "assignmentNo": 2,
            "marks": 24
        },
        {
            "id": 3,
            "assignmentNo": 3,
            "marks": 57
        },
        {
            "id": 4,
            "assignmentNo": 4,
            "marks": 55
        },
        {
            "id": 5,
            "assignmentNo": 5,
            "marks": 40
        },
        {
            "id": 6,
            "assignmentNo": 6,
            "marks": 51
        },
        {
            "id": 7,
            "assignmentNo": 7,
            "marks": 60
        },
        {
            "id": 8,
            "assignmentNo": 8,
            "marks": 46
        }
    ]


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4E50', '#C39BD3', '#993500', '#350099'];


    return (
        <div className='w-screen h-screen mx-auto text-center'>
<ResponsiveContainer width="100%" height={500}>
<PieChart width={730} height={250}>
                <Pie data={data} dataKey="marks" nameKey="assignmentNo" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label>
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />

            </PieChart>
</ResponsiveContainer>
            
            <p className='text-gray-500'> Fig: Assignment Marks</p>

        </div>


    );
};




export default Staistics;