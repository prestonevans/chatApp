class Message {
    constructor(content, user) {
        this.id = util.newGuid('message');
        this.content = content;
        this.user = user;
    }
}