"use client"
import Box from "./box";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../api/services/store";
import { useEffect } from "react";
import { fetchProjects } from "../api/services/projectsSlice";
import { Project, dummyProjects } from "../utils/utils";
export default function Section() {
    const dispatch: AppDispatch = useDispatch();
    const {  loading, error } = useSelector((state: RootState) => state.projects);
    let {projects} = useSelector((state: RootState) => state.projects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) {
        projects = dummyProjects
    }

    return (
        <>
            <section className="section-two flex justify-between p-10">
                {projects.map((project,index) => (
                    <Box key={index} data={project as Project}/>
                ))}

            </section>

        </>
    );
}
