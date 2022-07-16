import data from './SecurityNews.json';

export default function SecurityList() {
    const SecurityList = data.security
    return (
        <table>
            <h1>Security🔒</h1>
            <tbody>
                {SecurityList.map((security) => (
                <tr key = {security.id}>
                    <td>{security.id+1}</td>
                    <td><img src={security.image_url} width = "80px" height="80px" alt={security.image_alt}/></td>
                        <td><a href={security.url}>{security.title}</a></td>
                        <td>{security.summary}</td>
                        <td>{security.date}</td>
                </tr>
                    ))}
            </tbody>
        </table>
    )
}