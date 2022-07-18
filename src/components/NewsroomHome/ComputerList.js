import data from './ComputerNews.json';

export default function ComputerList() {
    const ComputerList = data.computer
    return (
        <section className="NewsTable" id="Computer">
            <div className="c-container mx-auto">
                <h1 className="pt-10 pb-10 text-4xl font-bold text-center">Computer🖥️</h1>
                <table className="mb-20 hover:border-collapse">
                    <tbody>
                        {ComputerList.map((computer) => (
                        <tr key = {computer.id}>
                            <td className="border border-slate-300">{computer.id+1}</td>
                            <td className="border border-slate-300"><img src={computer.image_url} width = "100px" height="100px" alt={computer.image_alt}/></td>
                            <td className="border border-slate-300"><div><b><a href={computer.url}>{computer.title}</a></b></div>
                            <div>{computer.summary}</div></td>
                            <td className="border border-slate-300">{computer.date}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}