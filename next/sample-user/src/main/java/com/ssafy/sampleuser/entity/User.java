package com.ssafy.sampleuser.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.ZonedDateTime;


@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "user")
public class User {
    @Id
    @Column(unique = true)
    @NotNull
    @Size(max = 100)
    private int userId;

    @Column(length = 30)
    @NotNull
    @Size(max = 30)
    private String userName;

    private String userHobby;


    @Builder
    public User(
            @NotNull @Size(max = 100) int userId,
            @NotNull @Size(max = 30) String userName,
            @NotNull @Size(max = 100) String userHobby
    ) {
        this.userId = userId;
        this.userName = userName;
        this.userHobby = userHobby;
    }
}
