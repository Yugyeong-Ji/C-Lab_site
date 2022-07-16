import data from './MobileNews.json';

export default function MobileList() {
    const MobileList = data.mobile
    return (
        <section class="NewsTable">
            <div class="c-container mx-auto">
                <h1 className="pt-10 pb-10 text-4xl font-bold text-center">Mobile📲</h1>
                <table class="hover:border-collapse">
                    <tbody>
                        {MobileList.map((mobile) => (
                        <tr key = {mobile.id}>
                            <td class="border border-slate-300">{mobile.id+1}</td>
                            <td class="border border-slate-300"><img src={mobile.image_url} width = "100px" height="100px" alt={mobile.image_alt}/></td>
                            <td class="border border-slate-300"><div><b><a href={mobile.url}>{mobile.title}</a></b></div>
                            <div>{mobile.summary}</div></td>
                            <td class="border border-slate-300">{mobile.date}</td>
                        </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}