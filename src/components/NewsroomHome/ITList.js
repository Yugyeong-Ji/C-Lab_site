import data from './ITNews.json';

export default function ITList() {
    const ITList = data.IT
    return (
        <section class="NewsTable" id="IT">
            <div class="c-container mx-auto">
                <h1 className="pt-10 pb-10 text-4xl font-bold text-center">IT🤖</h1>
                <table class="hover:border-collapse">
                    <tbody>
                        {ITList.map((IT) => (
                        <tr key = {IT.id}>
                            <td class="border border-slate-300">{IT.id+1}</td>
                            <td class="border border-slate-300"><img src={IT.image_url} width = "100px" height="100px" alt={IT.image_alt}/></td>
                            <td class="border border-slate-300"><div><b><a href={IT.url}>{IT.title}</a></b></div>
                            <div>{IT.summary}</div></td>
                            <td class="border border-slate-300">{IT.date}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}