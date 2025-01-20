package com.ruturaj.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ruturaj.backend.modal.Comment;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByUserId(Long userId);

    // List<Comment> findByPostId(Post postId);

    List<Comment> findByPostId(Long postId);  


    List<Comment> findByUserIdAndPostId(Long userId, Long postId);

    

}