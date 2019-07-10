import React,{Component} from 'react';
class CommentList extends Component {
  state = {

  }
  handlePublish= ()=>{
    const userName = this.refs.userName.value;
    const commentContent = this.refs.commentContent.value
    console.log({userName,commentContent});
    const {onPublish} = this.props;
    onPublish(userName,commentContent);
  }
  render() {
    return(
      <div>
        用户名： <input ref="userName" type="text" />
        <div>
        评论内容：<textarea  ref="commentContent" name="" id="" cols ="30" rows="10"></textarea>
        </div>
        <button onClick={this.handlePublish}>发布</button>
      </div>
    )
  }
}
export default  CommentList
