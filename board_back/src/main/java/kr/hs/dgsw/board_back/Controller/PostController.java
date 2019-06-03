package kr.hs.dgsw.board_back.Controller;

import kr.hs.dgsw.board_back.Domain.Post;
import kr.hs.dgsw.board_back.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping("/api/post/list")
    public List list() {
        return this.postService.findAll();
    }

    @GetMapping("/api/post/find/{id}")
    public Post find(@PathVariable Long id) {
        return this.postService.findById(id);
    }

    @GetMapping("/api/post/delete/{id}")
    public int delete(@PathVariable Long id){
        return this.postService.deleteById(id);
    }

    @PostMapping("/api/post/add")
    public Long add(@RequestBody Post post){
        return this.postService.add(post);
    }

    @PostMapping("/api/post/modify")
    public int modify(@RequestBody Post post){
        return this.postService.modify(post);
    }

    @GetMapping("/api/post/findByUID/{userId}")
    public List findByUID(Long UID) {
        return this.postService.findByUserId(UID);
    }

    @PostMapping("/api/post/add/hashmap")
    public int addwithHashMap(@RequestBody Post post){
        return this.postService.addWithHashMap(post);
    }
}
