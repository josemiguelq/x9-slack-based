export default function map(messages) {
    let mappedMessage = []
    messages.filter((item) => {
        const splited = item.text.split(/\*| -/)
        if (item.attachments && item.attachments.length) {
            const dates = item.attachments[0].footer.split(/ UTC|STARTED: |ENDED: /)
            const github = item.attachments[0].title.split(/\|/)
            let t = {
                ms: splited[1],
                build: splited[4],
                by: splited[6],
                started: dates[1],
                pr: github[1],
                ended: dates.length > 4 ? dates[3] : null
            }
            mappedMessage.push(t)
        }
    })

    let group = mappedMessage.reduce((r, a) => {
        r[a.ms] = [...r[a.ms] || [], a];
        return r;
    }, {});

    const list = Object.values(group).map((item) => (item[0]))
    return list.map(item => {
        let history = group[item.ms]
        return {...item, history}
    })
}
