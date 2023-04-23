package com.ssafy.sampleuser.service;

import com.ssafy.sampleuser.entity.User;
import com.ssafy.sampleuser.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public List<User> getUserNickname(String userId) {
        return userRepository.findAll();
    }
}
