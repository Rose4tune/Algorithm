function solution(record) {
    const nicknameMap = {};
    const result = [];

    for (const line of record) {
        const [_, uid, nickname] = line.split(" ");
        if (nickname) nicknameMap[uid] = nickname;
    }

    for (const line of record) {
        const [action, uid] = line.split(" ");
        if (action === "Enter") result.push(`${nicknameMap[uid]}님이 들어왔습니다.`);
        if (action === "Leave") result.push(`${nicknameMap[uid]}님이 나갔습니다.`);
    }

    return result;
}