package com.ssafy.sampleuser.repository;

import com.ssafy.sampleuser.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, String> {

}
