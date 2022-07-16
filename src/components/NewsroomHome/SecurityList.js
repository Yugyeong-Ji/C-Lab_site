import data from './SecurityNews.json';

export default function SecurityList() {
    const SecurityList = data.security
    return (
        <section class="NewsTable">
            <div class="c-container mx-auto">
                <h1 className="pt-10 pb-10 text-4xl font-bold text-center">Security🔒</h1>
                <table class="hover:border-collapse">
        
                    <tbody>
                        {SecurityList.map((security) => (
                        <tr key = {security.id}>
                            <td class="border border-slate-300">{security.id+1}</td>
                            <td class="border border-slate-300"><img src={security.image_url} width = "100px" height="100px" alt={security.image_alt}/></td>
                            <td class="border border-slate-300"><div><b><a href={security.url}>{security.title}</a></b></div>
                            <div>{security.summary}</div></td>
                            <td class="border border-slate-300">{security.date}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}