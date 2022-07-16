import data from './ComputerNews.json';

export default function ComputerList() {
    const ComputerList = data.computer
    return (
        <section class="NewsTable">
            <div class="c-container mx-auto">
                <h1 className="pt-10 pb-10 text-4xl font-bold text-center">Computer🖥️</h1>
                <table class="hover:border-collapse">
                    <tbody>
                        {ComputerList.map((computer) => (
                        <tr key = {computer.id}>
                            <td class="border border-slate-300">{computer.id+1}</td>
                            <td class="border border-slate-300"><img src={computer.image_url} width = "100px" height="100px" alt={computer.image_alt}/></td>
                            <td class="border border-slate-300"><div><b><a href={computer.url}>{computer.title}</a></b></div>
                            <div>{computer.summary}</div></td>
                            <td class="border border-slate-300">{computer.date}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}