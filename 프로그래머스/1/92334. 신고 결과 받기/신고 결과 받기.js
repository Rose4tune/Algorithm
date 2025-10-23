function solution(id_list, report, k) {
    const reports = [...new Set(report)].map(r => r.split(' '));
    const reportedCnt = {};
    const userMail = {};
    
    id_list.forEach(id => {
        reportedCnt[id] = 0;
        userMail[id] = [];
    });
    
    reports.forEach(([from, to]) => {
        reportedCnt[to]++;
        userMail[from].push(to);
    });
    
    return id_list.map(id => 
        userMail[id].filter(target => reportedCnt[target] >= k).length
    );
}