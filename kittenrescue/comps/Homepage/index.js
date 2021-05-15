function HomepageUI({
    url="https://cdn130.picsart.com/280413913011211.png?type=webp&to=min&r=640"
}){
    return <div>
    <img style ={{
        width:250,
        height:400,
        objectFit:"cover"
    } } src ={url} />
</div>
}
export default HomepageUI;