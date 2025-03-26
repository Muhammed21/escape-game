import { Container } from "@/components/container/Container";
import { useEffect, useState } from "react";

type TeamProps = {
    FinalTime?: string;
    game_status?: string;
    teams: {
        team_name?: string;
    }[]
}

export const Teams_Table = () => {
    const [teams, setTeams] = useState<TeamProps[]>([])

    const fetchTeams = async () => {
        const res = await fetch(`http://192.168.4.60/workshopAPI/api/v1/index.php?games`)
        const json = await res.json()
        setTeams(json)
        console.log(json)
    }

    useEffect(() => {
        fetchTeams()
    }, [])

    return (
        <Container py={60}>
            <table className="text-white font-aston text-left overflow-hidden">
                <thead className="bg-[#1F6DBD]">
                    <tr>
                        <th className="p-3 bg-[#1F6DBD] rounded-tl-md">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Team Name
                            </p>
                        </th>
                        <th className="p-3 bg-[#1F6DBD]">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Game Time
                            </p>
                        </th>
                        <th className="p-3 bg-[#1F6DBD] rounded-tr-md">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Status
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td className="p-4 border-r-2 border-b-2 border-[#1F6DBD]">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                                    {team.teams?.map((data, idx) => (
                                        <span key={idx} className="mr-2">
                                            {data.team_name}
                                        </span>
                                    ))}
                                </p>
                            </td>
                            <td className="p-4 border-r-2 border-b-2 border-[#1F6DBD]">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                                    {team.FinalTime !==undefined && team.FinalTime!==null ? team.FinalTime : 'En cours...'}
                                </p>
                            </td>
                            <td className="p-4 border-b-2 border-[#1F6DBD]">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                                    {team.game_status}
                                </p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}