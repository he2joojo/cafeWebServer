package kr.codesqaud.cafe.dto;

import java.time.LocalDateTime;

public class Answer {

    private Long id;
    private String userName;
    private Long articleId;
    private String contents;
    private LocalDateTime createdTime;

    public Answer() {
    }

    public Answer(Long id, String userName, Long articleId, String contents) {
        this.id = id;
        this.userName = userName;
        this.articleId = articleId;
        this.contents = contents;
        this.createdTime = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }
}
