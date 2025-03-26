import { Container } from "@/components/container/Container";
import { useEffect, useState } from "react";

type TeamProps = {
    game_time?: string;
    mindgames?: {
        mindgame_status?: string
    }[];
    teams: {
        team_name?: string;
    }
}

export const Teams_Table = () => {
    const [teams, setTeams] = useState<TeamProps[]>([])

    const fetchTeams = async () => {
        const res = await fetch(`http://192.168.4.60/workshopAPI/api/v1/index.php?teams`)
        const json = await res.json()
        setTeams(json)
        console.log(teams)
    }

    useEffect(() => {
        // fetchTeams()
    }, [])

    return (
        <Container py={60}>
            <table className="text-white font-aston text-left overflow-hidden">
                <thead className="bg-[#1F6DBD]">
                    <tr>
                        <th className="p-3 bg-[#1F6DBD] rounded-tl-md">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Name
                            </p>
                        </th>
                        <th className="p-3 bg-[#1F6DBD]">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Job
                            </p>
                        </th>
                        <th className="p-3 bg-[#1F6DBD] rounded-tr-md">
                            <p className="block text-sm antialiased font-normal leading-none text-white">
                                Employed
                            </p>
                        </th>
                    </tr>
                </thead>
                {/* <tbody>
                {teams.map((team, index) => (
                    <tr key={index}>
                        <td>{team.teams?.team_name}</td>    
                        <td>{team.game_time}</td>
                        <td>{team.mindgames?.map((mindgame, index) => (
                            <span key={index}>{mindgame.mindgame_status}</span>
                        ))}
                        </td>
                    </tr>      
                ))}
            </tbody> */}
                <tbody>
                    <tr>
                        <td className="p-4 border-r-2 border-b-26 border-[#1F6DBD] rounded-bl-md">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                John Michael
                            </p>
                        </td>
                        <td className="p-4 border-r-2 border-b-26 border-[#1F6DBD]">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                John Michael
                            </p>
                        </td>
                        <td className="p-4 border-b-26 border-[#1F6DBD] rounded-br-md">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                John Michael
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}